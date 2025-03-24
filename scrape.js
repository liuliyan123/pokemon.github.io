import axios from 'axios';
import * as cheerio from 'cheerio';

const GEN1_URL = 'https://www.pokemon.cn/play/pokedex/';

async function scrapeGen1Data() {
  const pokemonList = []; // 添加缺失的数组声明
  try {
    const { data } = await axios.get(GEN1_URL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36'
      }
    });

    const $ = cheerio.load(data);
    // 输出关键HTML结构用于分析
    console.log('容器元素检查:', $('div.pokedex-grid, section.pokemon-list').length ? '找到容器' : '未找到容器');
    console.log('示例卡片HTML:', $('div.pokemon-item:first').html() || $('li.pokemon:first').html() || '无匹配元素');
    console.log('实际卡片数量:', $('div.pokemon-item, li.pokemon').length);

    // 尝试备用选择器路径
    const $cards = $('div.pokemon-item, li.pokemon-card');
    console.log('实际匹配元素数量:', $cards.length);
    // 新增HTML结构调试日志
    console.log('首张卡片完整HTML:', $cards.first().html());
    
    $cards.each((i, el) => {
      const id = $(el).find('[data-pokemon-id]').attr('data-pokemon-id') || $(el).find('.pokemon-number').text().replace('#','').trim();
      console.log('正在处理编号:', id);
      const name = $(el).find('.p-name').text().trim();
      const types = $(el).find('.p-type').map((i, t) => $(t).text().trim()).get();
      const abilities = $(el).find('.ability-item').map((i, a) => $(a).text().trim().replace('特性：', '')).get();
      const heightText = $(el).find('.pokemon-size .height').text().trim();
      const weightText = $(el).find('.pokemon-size .weight').text().trim();
      const [height, weight] = $(el).find('.pokemon-size').text().trim().split('/').map(s => s.replace(/[^0-9.]/g, ''));
      const levelUpMoves = $(el).find('.levelup-moves li').map((i, m) => $(m).text().trim()).get();
      const evolution = $(el).find('.evolution-chain a').map((i, e) => ({
        name: $(e).text().trim(),
        condition: $(e).next('span').text().trim() || '等级提升'
      })).get();
      
      // 需要根据实际页面结构补充其他字段解析逻辑
      const pokemon = {
        id,
        name,
        types,
        abilities: abilities.filter(a => a),
        height: heightText.replace(/[^0-9.]/g, ''),
        weight: weightText.replace(/[^0-9.]/g, ''),
        skills: {
          levelUp: levelUpMoves,
          eggMoves: $(el).find('.egg-moves li').map((i, m) => $(m).text().trim()).get(),
          tmMoves: $(el).find('.tm-moves li').map((i, m) => $(m).text().trim()).get()
        },
        evolution
      };

      console.log(`正在解析: ${name}`);
      pokemonList.push(pokemon);
    });

    // 按ID排序并验证数量
    console.log('临时抓取结果:', pokemonList.slice(0,3));
const sortedData = pokemonList
      .sort((a, b) => a.id - b.id)
      .slice(0, 151);

    console.log('成功抓取到', sortedData.length, '条第一世代数据');
    return sortedData;
  } catch (error) {
    console.error('抓取失败:', error.message);
    process.exit(1);
  }
}

// 添加执行调用
scrapeGen1Data()
  .then(data => console.log(data))
  .catch(err => console.error(err));
// 在package.json中添加type:"module"