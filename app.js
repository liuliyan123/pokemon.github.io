import { pokemonData } from './data.js';

const tableBody = document.querySelector('#pokedexTable tbody');
const searchInput = document.querySelector('#searchInput');
const genFilter = document.querySelector('#genFilter');

function renderTable(data) {
  tableBody.innerHTML = [...data]
  .sort((a, b) => a.id - b.id)
  // 移除可能导致重复数据过滤的去重逻辑
  // .filter((pokemon, index, self) => self.findIndex(p => p.id === pokemon.id) === index)
  .map(pokemon => {
    const types = pokemon.types.join('/');
    const abilities = pokemon.abilities.join(', ');
    const skills = `升级: ${pokemon.skills?.levelUp?.slice(0,3).join(', ') ?? '无'}<br>
                   遗传: ${pokemon.skills?.eggMoves?.slice(0,2).join(', ') ?? '无'}<br>
                   TM: ${pokemon.skills?.tmMoves?.slice(0,2).join(', ') ?? '无'}`;
    const evolution = (pokemon.evolution ?? []).map(e => 
      `${e.name}（${e.condition ?? '未知'}）`).join(' → ') || '无进化链';

    return `<tr>
      <td>#${pokemon.id.toString().padStart(3, '0')}</td>
      <td><img src="sprites/${pokemon.id}.png" alt="${pokemon.name}" class="sprite" title="点击查看详情" onerror="this.src='sprites/placeholder.png';this.title='图像暂未收录'"></td>
      <td>${pokemon.name}</td>
      <td>${types}</td>
      <td>${abilities}</td>
      <td>${pokemon.height}m/${pokemon.weight}kg</td>
      <td>${skills}</td>
      <td>${evolution}</td>
    </tr>`;
  }).join('');
}

function filterPokemon() {
  const searchTerm = searchInput.value.toLowerCase();
  console.log('当前搜索词:', searchTerm);
  console.log('处理后的搜索词:', searchTerm);
  const selectedGen = genFilter.value;
  console.log('选择的世代:', selectedGen);

  const filtered = pokemonData.filter(p => {
    const matchesSearch = p.name.includes(searchTerm) || 
      p.id.toString().includes(searchTerm) ||
      p.types.some(t => t.toLowerCase().includes(searchTerm));
    console.log(`检查 ${p.name}: 名称匹配? ${p.name.includes(searchTerm)}, ID匹配? ${p.id.toString().includes(searchTerm)}, 属性匹配? ${p.types.some(t => t.toLowerCase().includes(searchTerm))}`);
    
    const matchesGen = selectedGen === 'all' || 
      p.generation.toString() === selectedGen;

    return matchesSearch && matchesGen;
  });

  console.log('匹配结果:', filtered.map(p => p.name));
  renderTable(filtered);
}

// 添加在renderTable函数之后


// 初始化世代筛选选项
for(let i=1; i<=8; i++) {
  genFilter.innerHTML += `<option value="${i}">第${i}世代</option>`;
}

// 事件监听
searchInput.addEventListener('input', filterPokemon);
genFilter.addEventListener('change', filterPokemon);

// 初始渲染
console.log('初始数据加载:', pokemonData.length, '条宝可梦数据');
console.log('首条数据样例:', JSON.stringify(pokemonData[0], null, 2));
console.log('重复ID检查:', Array.from(new Set(pokemonData.map(p => p.id))).length !== pokemonData.length ? '发现重复ID' : '无重复ID');
console.log('数据有效性:', pokemonData.every(p => p.id && p.name) ? '有效' : '存在无效数据');
renderTable(pokemonData);
console.log('渲染完成，表格行数:', document.querySelectorAll('#pokedexTable tr').length);
console.log('表格已渲染', document.querySelectorAll('#pokedexTable tr').length, '行数据');