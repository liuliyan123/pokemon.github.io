// 添加第一世代宝可梦数据
export const pokemonData = [
  {
    id: 1,
    name: '妙蛙种子',
    types: ['草', '毒'],
    abilities: ['茂盛'],
    height: 0.7,
    weight: 6.9,
    skills: {
      levelUp: ['藤鞭', '生长', '飞叶快刀'],
      eggMoves: ['光合作用', '魔法叶'],
      tmMoves: ['阳光烈焰', '毒液冲击']
    },
    evolution: [{ name: '妙蛙草', condition: '16级进化' }]
  },
  {
    id: 2,
    name: '妙蛙草',
    types: ['草', '毒'],
    abilities: ['茂盛'],
    height: 1.0,
    weight: 13.0,
    skills: {
      levelUp: ['花瓣舞', '甜气', '寄生种子'],
      eggMoves: ['能量球', '扎根'],
      tmMoves: ['污泥炸弹', '地震']
    },
    evolution: [{ name: '妙蛙花', condition: '32级进化' }]
  },
  {
    id: 3,
    name: '妙蛙花',
    types: ['草', '毒'],
    abilities: ['茂盛'],
    height: 2.0,
    weight: 100.0,
    skills: {
      levelUp: ['日光束', '污泥炸弹', '光合作用'],
      eggMoves: ['能量球', '大地之力'],
      tmMoves: ['剧毒', '破坏光线']
    },
    evolution: []
  },
  {
    id: 4,
    name: '小火龙',
    types: ['火'],
    abilities: ['猛火'],
    height: 0.6,
    weight: 8.5,
    skills: {
      levelUp: ['火花', '烟幕', '火焰牙'],
      eggMoves: ['空气斩', '龙息'],
      tmMoves: ['喷射火焰', '阳光烈焰']
    },
    evolution: [{ name: '火恐龙', condition: '16级进化' }]
  },
  {
    id: 5,
    name: '火恐龙',
    types: ['火'],
    abilities: ['猛火'],
    height: 1.1,
    weight: 19.0,
    skills: {
      levelUp: ['火焰漩涡', '劈开', '喷射火焰'],
      eggMoves: ['逆鳞', '龙之舞'],
      tmMoves: ['地震', '岩崩']
    },
    evolution: [{ name: '喷火龙', condition: '36级进化' }]
  },
  {
    id: 6,
    name: '喷火龙',
    types: ['火', '飞行'],
    abilities: ['猛火'],
    height: 1.7,
    weight: 90.5,
    skills: {
      levelUp: ['翅膀攻击', '火焰漩涡', '空气斩'],
      eggMoves: ['龙之波动', '爆炸烈焰'],
      tmMoves: ['喷射火焰', '龙爪']
    },
    evolution: []
  },
  {
    id: 7,
    name: '杰尼龟',
    types: ['水'],
    abilities: ['激流'],
    height: 0.5,
    weight: 9.0,
    skills: {
      levelUp: ['水枪', '缩壳', '水之波动'],
      eggMoves: ['镜面反射', '龙尾'],
      tmMoves: ['冲浪', '冰冻光束']
    },
    evolution: [{ name: '卡咪龟', condition: '16级进化' }]
  },
  {
    id: 8,
    name: '卡咪龟',
    types: ['水'],
    abilities: ['激流'],
    height: 1.0,
    weight: 22.5,
    skills: {
      levelUp: ['水炮', '高速旋转', '守住'],
      eggMoves: ['水流环', '哈欠'],
      tmMoves: ['攀瀑', '冰冻拳']
    },
    evolution: [{ name: '水箭龟', condition: '36级进化' }]
  },
  {
    id: 9,
    name: '水箭龟',
    types: ['水'],
    abilities: ['激流'],
    height: 1.6,
    weight: 85.5,
    skills: {
      levelUp: ['加农水炮', '火箭头锤', '波导弹'],
      eggMoves: ['水流喷射', '生命水滴'],
      tmMoves: ['地震', '岩崩']
    },
    evolution: []
  },
  {
    id: 10,
    name: '绿毛虫',
    types: ['虫'],
    abilities: ['鳞粉'],
    height: 0.3,
    weight: 2.9,
    skills: {
      levelUp: ['吐丝', '撞击'],
      eggMoves: ['电网', '虫之抵抗'],
      tmMoves: ['守住', '影子分身']
    },
    evolution: [{ name: '铁甲蛹', condition: '7级进化' }]
  },
  {
    id: 11,
    name: '铁甲蛹',
    types: ['虫'],
    abilities: ['蜕皮'],
    height: 0.7,
    weight: 9.9,
    skills: {
      levelUp: ['变硬', '铁壁'],
      eggMoves: [],
      tmMoves: []
    },
    evolution: [{ name: '巴大蝶', condition: '10级进化' }]
  },
  {
    id: 12,
    name: '巴大蝶',
    types: ['虫', '飞行'],
    abilities: ['复眼'],
    height: 1.1,
    weight: 32.0,
    skills: {
      levelUp: ['起风', '念力', '睡眠粉'],
      eggMoves: ['晨光', '顺风'],
      tmMoves: ['暴风', '能量球']
    },
    evolution: []
  },
  {
    id: 13,
    name: '独角虫',
    types: ['虫', '毒'],
    abilities: ['鳞粉'],
    height: 0.3,
    weight: 3.2,
    skills: {
      levelUp: ['毒针', '吐丝'],
      eggMoves: ['毒菱', '虫咬'],
      tmMoves: ['十字毒刃', '污泥攻击']
    },
    evolution: [{ name: '铁壳蛹', condition: '7级进化' }]
  },
  {
    id: 14,
    name: '铁壳蛹',
    types: ['虫', '毒'],
    abilities: ['蜕皮'],
    height: 0.6,
    weight: 10.0,
    skills: {
      levelUp: ['变硬', '毒液陷阱'],
      eggMoves: [],
      tmMoves: []
    },
    evolution: [{ name: '大针蜂', condition: '10级进化' }]
  },
  {
    id: 15,
    name: '大针蜂',
    types: ['虫', '毒'],
    abilities: ['虫之预感'],
    height: 1.0,
    weight: 29.5,
    skills: {
      levelUp: ['双针', '乱击', '飞弹针'],
      eggMoves: ['致命针刺', '直冲钻'],
      tmMoves: ['毒击', '十字剪']
    },
    evolution: []
  },
  {
    id: 16,
    name: '波波',
    types: ['一般', '飞行'],
    abilities: ['锐利目光'],
    height: 0.3,
    weight: 1.8,
    skills: {
      levelUp: ['啄', '起风', '电光一闪'],
      eggMoves: ['羽毛舞', '空气利刃'],
      tmMoves: ['钢翼', '影子分身']
    },
    evolution: [{ name: '比比鸟', condition: '18级进化' }]
  },
  {
    id: 17,
    name: '比比鸟',
    types: ['一般', '飞行'],
    abilities: ['锐利目光'],
    height: 1.1,
    weight: 30.0,
    skills: {
      levelUp: ['翅膀攻击', '龙卷风', '高速移动'],
      eggMoves: ['暴风', '神鸟猛击'],
      tmMoves: ['破坏光线', '羽栖']
    },
    evolution: [{ name: '大比鸟', condition: '36级进化' }]
  },
  {
    id: 18,
    name: '大比鸟',
    types: ['一般', '飞行'],
    abilities: ['锐利目光'],
    height: 1.5,
    weight: 39.5,
    skills: {
      levelUp: ['空气斩', '暴风', '勇鸟猛攻'],
      eggMoves: ['热风', '顺风'],
      tmMoves: ['飞翔', '急速折返']
    },
    evolution: []
  },
  {
    id: 19,
    name: '小拉达',
    types: ['一般'],
    abilities: ['逃跑', '毅力'],
    height: 0.3,
    weight: 3.5,
    skills: {
      levelUp: ['撞击', '摇尾巴', '电光一闪'],
      eggMoves: ['突袭', '愤怒门牙'],
      tmMoves: ['影子分身', '以牙还牙']
    },
    evolution: [{ name: '拉达', condition: '20级进化' }]
  },
  {
    id: 20,
    name: '拉达',
    types: ['一般'],
    abilities: ['逃跑', '毅力'],
    height: 0.7,
    weight: 18.5,
    skills: {
      levelUp: ['撞击', '摇尾巴', '电光一闪'],
      eggMoves: ['突袭', '愤怒门牙'],
      tmMoves: ['影子分身', '以牙还牙']
    },
    form: '阿罗拉',
    altType: ['恶']
  },
  // 补充22-150号宝可梦数据
  {
    id: 21,
    name: '烈雀',
    types: ['一般', '飞行'],
    abilities: ['锐利目光'],
    height: 0.6,
    weight: 19.8,
    skills: {
      levelUp: ['啄食', '瞪眼', '电光一闪'],
      eggMoves: ['钢翼', '羽毛舞'],
      tmMoves: ['飞翔', '影子分身']
    },
    evolution: [{ name: '大嘴雀', condition: '20级进化' }]
  },
  {
    id: 22,
    name: '大嘴雀',
    types: ['一般', '飞行'],
    abilities: ['锐利目光'],
    height: 1.2,
    weight: 38.0,
    skills: {
      levelUp: ['啄食', '高速移动', '钢翼'],
      eggMoves: ['勇鸟猛攻', '顺风'],
      tmMoves: ['飞翔', '燕返']
    },
    evolution: []
  },
  {
    id: 23,
    name: '阿柏蛇',
    types: ['毒'],
    abilities: ['威吓'],
    height: 2.0,
    weight: 6.9,
    skills: {
      levelUp: ['紧束', '毒针', '大蛇瞪眼'],
      eggMoves: ['铁尾', '突袭'],
      tmMoves: ['污泥攻击', '地震']
    },
    evolution: [{name: '阿柏怪', condition: '22级进化'}]
  },
    {
    id: 24,
    name: '阿柏怪',
    types: ['毒'],
    abilities: ['威吓', '蜕皮'],
    height: 3.5,
    weight: 65.0,
    skills: {
      levelUp: ['溶解液', '咬碎', '大蛇瞪眼'],
      eggMoves: ['铁尾', '突袭'],
      tmMoves: ['地震', '污泥波']
    },
    evolution: []
  },
  {
    id: 25,
    name: '皮卡丘',
    types: ['电'],
    abilities: ['静电'],
    height: 0.4,
    weight: 6.0,
    skills: {
      levelUp: ['电击', '电光一闪', '十万伏特'],
      eggMoves: ['冲浪', '伏特攻击'],
      tmMoves: ['打雷', '光墙']
    },
    evolution: [{name: '雷丘', condition: '雷之石进化'}],
    form: '阿罗拉',
    altType: ['电', '超能力']
  },
  {
    id: 26,
    name: '雷丘',
    types: ['电'],
    abilities: ['冲浪之尾'],
    height: 0.8,
    weight: 21.0,
    skills: {
      levelUp: ['精神强念', '十万伏特', ' psychic'],
      eggMoves: ['诡计', '抛物面充电'],
      tmMoves: ['精神冲击', '伏特替换']
    },
    evolution: []
  },
  {
    id: 31,
    name: '尼多后',
    types: ['毒', '地面'],
    abilities: ['毒刺', '斗争心'],
    height: 1.3,
    weight: 60.0,
    genderRatio: { female: 0.75, male: 0.25 },
    skills: {
      levelUp: ['大地之力', '超级角击', '毒击'],
      eggMoves: ['突袭', '铁尾'],
      tmMoves: ['地震', '污泥波']
    },
    evolution: []
  },
  {
    id: 32,
    name: '尼多朗',
    types: ['毒'],
    abilities: ['毒刺', '斗争心'],
    height: 0.5,
    weight: 9.0,
    genderRatio: { female: 0, male: 1 },
    skills: {
      levelUp: ['毒针', '二连踢', '角撞'],
      eggMoves: ['双倍奉还', '毒菱'],
      tmMoves: ['挖洞', '以牙还牙']
    },
    evolution: [{ name: '尼多力诺', condition: '16级进化' }]
  },
  {
    id: 33,
    name: '尼多力诺',
    types: ['毒'],
    abilities: ['毒刺', '斗争心'],
    height: 0.9,
    weight: 19.5,
    genderRatio: { female: 0, male: 1 },
    skills: {
      levelUp: ['毒尾', '乱击', '直冲钻'],
      eggMoves: ['超级角击', '铁头'],
      tmMoves: ['岩崩', '隐形岩']
    },
    evolution: [{ name: '尼多王', condition: '月之石进化' }]
  },
  {
    id: 34,
    name: '尼多王',
    types: ['毒', '地面'],
    abilities: ['毒刺', '斗争心'],
    height: 1.4,
    weight: 62.0,
    genderRatio: { female: 0, male: 1 },
    skills: {
      levelUp: ['大地之力', '百万吨角击', '地震'],
      eggMoves: ['双刃头锤', '龙尾'],
      tmMoves: ['尖石攻击', '喷射火焰']
    },
    evolution: []
  },
  {
    id: 35,
    name: '皮皮',
    types: ['妖精'],
    abilities: ['魔法防守', '迷人之躯'],
    height: 0.3,
    weight: 5.5,
    skills: {
      levelUp: ['拍击', '唱歌', '天使之吻'],
      eggMoves: ['挥指', '礼物'],
      tmMoves: ['月亮之力', '光墙']
    },
    evolution: [{ name: '皮可西', condition: '月之石进化' }]
  },
  {
    id: 36,
    name: '皮可西',
    types: ['妖精'],
    abilities: ['魔法防守', '好胜'],
    height: 1.3,
    weight: 40.0,
    skills: {
      levelUp: ['魔法闪耀', '月光', '破坏光线'],
      eggMoves: ['治愈波动', '您先请'],
      tmMoves: ['精神强念', '十万伏特']
    },
    evolution: []
  },
  // 补充27-50号数据
  {
    id: 27,
    name: '穿山鼠',
    types: ['地面'],
    abilities: ['沙隐'],
    height: 0.6,
    weight: 12.0,
    skills: {
      levelUp: ['抓', '变圆', '滚动'],
      eggMoves: ['金属爪', '高速旋转'],
      tmMoves: ['地震', '岩崩']
    },
    evolution: [{name: '穿山王', condition: '22级进化'}]
  },
  {
    id: 28,
    name: '穿山王',
    types: ['地面'],
    abilities: ['沙隐', '拨沙'],
    height: 1.0,
    weight: 29.5,
    skills: {
      levelUp: ['乱抓', '地震', '剑舞'],
      eggMoves: ['金属爪', '高速旋转'],
      tmMoves: ['岩崩', '隐形岩']
    },
    evolution: [],
    form: '阿罗拉',
    altType: ['冰', '钢']
  },
  {
    id: 29,
    name: '尼多兰',
    types: ['毒'],
    abilities: ['毒刺', '斗争心'],
    height: 0.4,
    weight: 7.0,
    genderRatio: { female: 0.75, male: 0.25 },
    skills: {
      levelUp: ['毒针', '二连踢', '咬住'],
      eggMoves: ['突袭', '毒菱'],
      tmMoves: ['污泥攻击', '挖洞']
    },
    evolution: [{ name: '尼多娜', condition: '16级进化' }]
  },
  {
    id: 30,
    name: '尼多娜',
    types: ['毒'],
    abilities: ['毒刺', '斗争心'],
    height: 0.8,
    weight: 20.0,
    genderRatio: { female: 0.75, male: 0.25 },
    skills: {
      levelUp: ['毒尾', '剧毒牙', '超级角击'],
      eggMoves: ['致命针刺', '诱惑'],
      tmMoves: ['大地之力', '污泥波']
    },
    evolution: [{ name: '尼多后', condition: '月之石进化' }]
  },
  {
    id: 37,
    name: '六尾',
    types: ['火'],
    abilities: ['引火'],
    height: 0.6,
    weight: 9.9,
    skills: {
      levelUp: ['火花', '摇尾巴', '电光一闪'],
      eggMoves: ['定身法', '催眠术'],
      tmMoves: ['喷射火焰', '神秘守护']
    },
    evolution: [{ name: '九尾', condition: '火之石进化' }],
    form: '阿罗拉',
    altType: ['冰']
  },
  {
    id: 38,
    name: '九尾',
    types: ['火'],
    abilities: ['日照'],
    height: 1.1,
    weight: 19.9,
    skills: {
      levelUp: ['热风', '奇异之光', '喷射火焰'],
      eggMoves: ['神通力', '魔法闪耀'],
      tmMoves: ['大字爆炎', '精神强念']
    },
    form: '阿罗拉',
    altType: ['冰', '妖精']
  },
  {
    id: 39,
    name: '胖丁',
    types: ['一般', '妖精'],
    abilities: ['迷人之躯', '好胜'],
    height: 0.5,
    weight: 5.5,
    skills: {
      levelUp: ['唱歌', '拍击', '天使之吻'],
      eggMoves: ['治愈铃声', '假哭'],
      tmMoves: ['魔法闪耀', '破坏光线']
    },
    evolution: [{ name: '胖可丁', condition: '月之石进化' }]
  },
  {
    id: 40,
    name: '胖可丁',
    types: ['一般', '妖精'],
    abilities: ['迷人之躯', '好胜'],
    height: 1.0,
    weight: 12.0,
    skills: {
      levelUp: ['巨声', '舍身冲撞', '治愈波动'],
      eggMoves: ['您先请', '礼物'],
      tmMoves: ['月亮之力', '光墙']
    }
  },
  // 补充41-50号数据
  {
    id: 41,
    name: '超音蝠',
    types: ['毒', '飞行'],
    abilities: ['精神力'],
    height: 0.8,
    weight: 7.5,
    skills: {
      levelUp: ['吸血', '超音波', '空气利刃'],
      eggMoves: ['顺风', '急速折返'],
      tmMoves: ['污泥炸弹', '恶之波动']
    },
    evolution: [{ name: '大嘴蝠', condition: '22级进化' }]
  },
  {
    id: 42,
    name: '大嘴蝠',
    types: ['毒', '飞行'],
    abilities: ['精神力'],
    height: 1.6,
    weight: 55.0,
    skills: {
      levelUp: ['空气斩', '剧毒牙', '十字毒刃'],
      eggMoves: ['勇鸟猛攻', '钢翼'],
      tmMoves: ['飞翔', '毒击']
    },
    evolution: [{ name: '叉字蝠', condition: '亲密度进化' }]
  },
  {
    id: 43,
    name: '走路草',
    types: ['草', '毒'],
    abilities: ['叶绿素'],
    height: 0.5,
    weight: 5.4,
    skills: {
      levelUp: ['吸取', '生长', '毒粉'],
      eggMoves: ['光合作用', '烦恼种子'],
      tmMoves: ['能量球', '污泥波']
    },
    evolution: [{ name: '臭臭花', condition: '21级进化' }]
  },
  {
    id: 44,
    name: '臭臭花',
    types: ['草', '毒'],
    abilities: ['叶绿素'],
    height: 1.2,
    weight: 8.6,
    skills: {
      levelUp: ['溶解液', '甜甜香气', '月光'],
      eggMoves: ['气象球', '青草场地'],
      tmMoves: ['日光束', '剧毒']
    },
    evolution: [{ name: '霸王花', condition: '叶之石进化' }, { name: '美丽花', condition: '日之石进化' }]
  },
  {
    id: 45,
    name: '霸王花',
    types: ['草'],
    abilities: ['孢子'],
    height: 1.2,
    weight: 18.6,
    skills: {
      levelUp: ['花瓣舞', '超级吸取', '麻痹粉'],
      eggMoves: ['自然之力', '扎根'],
      tmMoves: ['阳光烈焰', '污泥炸弹']
    }
  },
  {
    id: 46,
    name: '派拉斯',
    types: ['虫', '草'],
    abilities: ['孢子'],
    height: 0.3,
    weight: 5.4,
    skills: {
      levelUp: ['抓', '麻痹粉', '吸血'],
      eggMoves: ['蘑菇孢子', '十字剪'],
      tmMoves: ['能量球', '污泥攻击']
    },
    evolution: [{ name: '派拉斯特', condition: '24级进化' }]
  },
  {
    id: 47,
    name: '派拉斯特',
    types: ['虫', '草'],
    abilities: ['干燥皮肤'],
    height: 1.0,
    weight: 29.5,
    skills: {
      levelUp: ['蘑菇孢子', '十字剪', '吸血'],
      eggMoves: ['扎根', '青草场地'],
      tmMoves: ['日光束', '剧毒']
    }
  },
  {
    id: 48,
    name: '毛球',
    types: ['虫', '毒'],
    abilities: ['复眼'],
    height: 1.0,
    weight: 30.0,
    skills: {
      levelUp: ['毒针', '念力', '信号光束'],
      eggMoves: ['高速移动', '接力棒'],
      tmMoves: ['污泥波', '精神强念']
    },
    evolution: [{ name: '摩鲁蛾', condition: '31级进化' }]
  },
  {
    id: 49,
    name: '摩鲁蛾',
    types: ['虫', '毒'],
    abilities: ['鳞粉'],
    height: 1.5,
    weight: 12.5,
    skills: {
      levelUp: ['蝶舞', '毒粉', '精神强念'],
      eggMoves: ['顺风', '虫鸣'],
      tmMoves: ['暴风', '能量球']
    }
  },
  {
    id: 50,
    name: '三地鼠',
    types: ['地面'],
    abilities: ['沙隐', '沙之力'],
    height: 0.7,
    weight: 33.3,
    skills: {
      levelUp: ['地震', '流沙地狱', '劈开'],
      eggMoves: ['金属爪', '隐形岩'],
      tmMoves: ['岩崩', '隐形岩']
    },
    evolution: []
  },
  {
    id: 52,
    name: '喵喵',
    types: ['一般'],
    abilities: ['捡拾', '技术高手'],
    height: 0.4,
    weight: 4.2,
    skills: {
      levelUp: ['抓', '叫声', '聚宝功'],
      eggMoves: ['击掌奇袭', '恶意追击'],
      tmMoves: ['暗袭要害', '影子分身']
    },
    evolution: [{ name: '猫老大', condition: '28级进化' }],
    form: '阿罗拉',
    altType: ['恶']
  },
  {
    id: 53,
    name: '猫老大',
    types: ['一般'],
    abilities: ['柔软', '技术高手'],
    height: 1.0,
    weight: 32.0,
    skills: {
      levelUp: ['力量宝石', '诡计', '恶意追击'],
      eggMoves: ['击掌奇袭', '高速星星'],
      tmMoves: ['暗影球', '恶之波动']
    },
    evolution: []
  },
  {
    id: 54,
    name: '可达鸭',
    types: ['水'],
    abilities: ['湿气', '无关天气'],
    height: 0.8,
    weight: 19.6,
    skills: {
      levelUp: ['水枪', '念力', '乱抓'],
      eggMoves: ['催眠术', '十字劈'],
      tmMoves: ['精神强念', '冲浪']
    },
    evolution: [{ name: '哥达鸭', condition: '33级进化' }]
  },
  {
    id: 55,
    name: '哥达鸭',
    types: ['水'],
    abilities: ['湿气', '无关天气'],
    height: 1.7,
    weight: 76.6,
    skills: {
      levelUp: ['水炮', '精神利刃', '求雨'],
      eggMoves: ['瞬间失忆', '水流环'],
      tmMoves: ['冰冻光束', '精神冲击']
    },
    evolution: []
  },
  {
    id: 56,
    name: '猴怪',
    types: ['格斗'],
    abilities: ['干劲', '愤怒穴位'],
    height: 0.5,
    weight: 28.0,
    skills: {
      levelUp: ['踢倒', '空手劈', '十字劈'],
      eggMoves: ['增强拳', '子弹拳'],
      tmMoves: ['岩崩', '地震']
    },
    evolution: [{ name: '火爆猴', condition: '28级进化' }]
  },
  {
    id: 57,
    name: '火爆猴',
    types: ['格斗'],
    abilities: ['干劲', '愤怒穴位'],
    height: 1.0,
    weight: 32.0,
    skills: {
      levelUp: ['近身战', '大闹一番', '喷射拳'],
      eggMoves: ['快速防守', '双倍奉还'],
      tmMoves: ['毒击', '岩刃']
    },
    evolution: []
  },
  {
    id: 58,
    name: '卡蒂狗',
    types: ['火'],
    abilities: ['威吓', '引火'],
    height: 0.7,
    weight: 19.0,
    skills: {
      levelUp: ['火焰轮', '咬住', '喷射火焰'],
      eggMoves: ['晨光', '起死回生'],
      tmMoves: ['热风', '日光束']
    },
    evolution: [{ name: '风速狗', condition: '火之石进化' }]
  },
  {
    id: 59,
    name: '风速狗',
    types: ['火'],
    abilities: ['威吓', '引火'],
    height: 1.9,
    weight: 155.0,
    skills: {
      levelUp: ['闪焰冲锋', '神速', '大字爆炎'],
      eggMoves: ['晨光', '燃尽'],
      tmMoves: ['过热', '疯狂伏特']
    },
    evolution: []
  },
  {
    id: 60,
    name: '蚊香蝌蚪',
    types: ['水'],
    abilities: ['湿气', '储水'],
    height: 0.6,
    weight: 12.4,
    skills: {
      levelUp: ['水枪', '泡沫光线', '连环巴掌'],
      eggMoves: ['玩水', '黑雾'],
      tmMoves: ['冰冻拳', '求雨']
    },
    evolution: [{ name: '蚊香君', condition: '25级进化' }]
  },
  {
    id: 61,
    name: '蚊香君',
    types: ['水'],
    abilities: ['储水','湿气'],
    height: 1.0,
    weight: 20.0,
    skills: {
      levelUp: ['水之波动','腹鼓','攀瀑'],
      eggMoves: ['催眠术','泰山压顶'],
      tmMoves: ['冰冻光束','地震']
    },
    evolution: [{ name: '蚊香泳士', condition: '水之石进化' }]
  },
  {
    id: 62,
    name: '凯西',
    types: ['超能力'],
    abilities: ['同步','魔法防守'],
    height: 0.9,
    weight: 19.5,
    skills: {
      levelUp: ['念力','瞬间移动','幻象光线'],
      eggMoves: ['魔法空间','戏法'],
      tmMoves: ['精神强念','影子球']
    },
    evolution: [{ name: '勇基拉', condition: '16级进化' }]
  },
  {
    id: 63,
    name: '勇基拉',
    types: ['超能力'],
    abilities: ['同步','魔法防守'],
    height: 1.3,
    weight: 48.0,
    skills: {
      levelUp: ['幻象术','光墙','反射壁'],
      eggMoves: ['魔法闪耀','力量戏法'],
      tmMoves: ['能量球','十万伏特']
    },
    evolution: [{ name: '胡地', condition: '通信交换进化' }]
  },
  {
    id: 64,
    name: '腕力',
    types: ['格斗'],
    abilities: ['毅力','无防守'],
    height: 0.8,
    weight: 19.5,
    skills: {
      levelUp: ['空手劈','瞪眼','地球上投'],
      eggMoves: ['子弹拳','爆裂拳'],
      tmMoves: ['岩崩','雷电拳']
    },
    evolution: [{ name: '豪力', condition: '28级进化' }]
  },
  {
    id: 65,
    name: '豪力',
    types: ['格斗'],
    abilities: ['毅力','无防守'],
    height: 1.5,
    weight: 70.5,
    skills: {
      levelUp: ['十字劈','怪力','爆裂拳'],
      eggMoves: ['近身战','吸收拳'],
      tmMoves: ['地震','岩崩']
    },
    evolution: [{ name: '怪力', condition: '通信交换进化' }]
  },
  {
    id: 66,
    name: '喇叭芽',
    types: ['草','毒'],
    abilities: ['叶绿素','贪吃鬼'],
    height: 0.7,
    weight: 6.4,
    skills: {
      levelUp: ['藤鞭','生长','飞叶快刀'],
      eggMoves: ['气象球','光合作用'],
      tmMoves: ['污泥炸弹','日光束']
    },
    evolution: [{ name: '口呆花', condition: '21级进化' }]
  },
  {
    id: 67,
    name: '口呆花',
    types: ['草','毒'],
    abilities: ['叶绿素','贪吃鬼'],
    height: 1.0,
    weight: 6.4,
    skills: {
      levelUp: ['溶解液','催眠粉','强力鞭打'],
      eggMoves: ['青草滑梯','打草结'],
      tmMoves: ['毒击','暗影球']
    },
    evolution: [{ name: '大食花', condition: '叶之石进化' }]
  },
  {
    id: 68,
    name: '玛瑙水母',
    types: ['水','毒'],
    abilities: ['污泥浆','恒净之躯'],
    height: 0.6,
    weight: 45.5,
    skills: {
      levelUp: ['毒针','缠绕','酸液炸弹'],
      eggMoves: ['黑雾','镜面反射'],
      tmMoves: ['冲浪','冰冻光束']
    },
    evolution: [{ name: '毒刺水母', condition: '30级进化' }]
  },
  {
    id: 69,
    name: '小拳石',
    types: ['岩石','地面'],
    abilities: ['坚硬脑袋','沙隐'],
    height: 0.4,
    weight: 20.0,
    skills: {
      levelUp: ['滚动','变硬','落石'],
      eggMoves: ['重磅冲撞','隐形岩'],
      tmMoves: ['地震','岩崩']
    },
    evolution: [{ name: '隆隆石', condition: '25级进化' }]
  },
  {
    id: 70,
    name: '大食花',
    types: ['草', '毒'],
    abilities: ['叶绿素'],
    height: 1.7,
    weight: 15.5,
    skills: {
      levelUp: ['飞叶快刀', '溶解液', '光合作用'],
      eggMoves: ['气象球', '打鼾'],
      tmMoves: ['日光束', '污泥炸弹']
    },
    evolution: [{ name: '口呆花', condition: '使用叶之石' }]
  },
  {
    id: 71,
    name: '毒刺水母',
    types: ['水', '毒'],
    abilities: ['恒净之躯'],
    height: 1.6,
    weight: 55.0,
    skills: {
      levelUp: ['毒击', '水炮', '屏障'],
      eggMoves: ['黑雾', '镜面反射'],
      tmMoves: ['冲浪', '暴风雪']
    },
    evolution: [{ name: '玛瑙水母', condition: '30级进化' }]
  },
  {
    id: 72,
    name: '呆呆兽',
    types: ['水', '超能力'],
    abilities: ['迟钝'],
    height: 1.2,
    weight: 36.0,
    skills: {
      levelUp: ['水枪', '念力', '哈欠'],
      eggMoves: ['预知未来', '治愈波动'],
      tmMoves: ['精神强念', '冰冻光束']
    },
    evolution: [{ name: '呆壳兽', condition: '携带王者之证通信进化' }]
  },
  {
    id: 80,
    name: '隆隆岩',
    types: ['岩石', '地面'],
    abilities: ['结实'],
    height: 1.4,
    weight: 300.0,
    skills: {
      levelUp: ['地震', '岩石爆击', '大爆炸'],
      eggMoves: ['重磅冲撞', '挡路'],
      tmMoves: ['尖石攻击', '十万马力']
    },
    evolution: [{ name: '隆隆石', condition: '36级进化' }],
    form: '阿罗拉'
  },
  // 补充更多宝可梦数据...
  {
    id: 150,
    name: '超梦',
    types: ['超能力'],
    abilities: ['压迫感'],
    height: 2.0,
    weight: 122.0,
    skills: {
      levelUp: ['精神击破', '自我再生', '波导弹'],
      eggMoves: [],
      tmMoves: ['破坏光线', '精神强念']
    },
    evolution: []
  },
  // 处理形态差异示例
  {
    id: 20,
    name: '拉达',
    types: ['一般'],
    abilities: ['毅力'],
    height: 0.7,
    weight: 18.5,
    form: '阿罗拉',
    altType: ['恶'],
    skills: {
      levelUp: ['愤怒门牙', '暗袭要害', '突袭'],
      eggMoves: ['恶意追击', '掉包'],
      tmMoves: ['恶之波动', '诡计']
    }
  },
  {
    id: 73,
    name: '玛瑙水母',
    types: ['水', '毒'],
    abilities: ['吸盘', '恒净之躯'],
    height: 0.9,
    weight: 45.5,
    skills: {
      levelUp: ['毒针', '水枪', '缠绕'],
      eggMoves: ['黑雾', '镜面反射'],
      tmMoves: ['污泥波', '冲浪']
    },
    evolution: [{ name: '毒刺水母', condition: '30级进化' }]
  },
  {
    id: 74,
    name: '毒刺水母',
    types: ['水', '毒'],
    abilities: ['吸盘', '恒净之躯'],
    height: 1.6,
    weight: 55.0,
    skills: {
      levelUp: ['毒击', '水炮', '屏障'],
      eggMoves: ['酸性炸弹', '水流环'],
      tmMoves: ['暴风雪', '毒菱']
    },
    evolution: []
  },
  {
    id: 75,
    name: '小拳石',
    types: ['岩石', '地面'],
    abilities: ['结实', '沙隐'],
    height: 0.4,
    weight: 20.0,
    skills: {
      levelUp: ['滚动', '震级', '岩石封锁'],
      eggMoves: ['挡路', '重磅冲撞'],
      tmMoves: ['地震', '岩崩']
    },
    evolution: [{ name: '隆隆石', condition: '25级进化' }]
  },
  {
    id: 76,
    name: '隆隆石',
    types: ['岩石', '地面'],
    abilities: ['结实', '沙隐'],
    height: 1.0,
    weight: 105.0,
    skills: {
      levelUp: ['自爆', '重踏', '大爆炸'],
      eggMoves: ['变圆', '诅咒'],
      tmMoves: ['隐形岩', '尖石攻击']
    },
    evolution: [{ name: '隆隆岩', condition: '通信交换进化' }]
  },
  {
    id: 77,
    name: '隆隆岩',
    types: ['岩石', '地面'],
    abilities: ['结实', '沙隐'],
    height: 1.4,
    weight: 300.0,
    skills: {
      levelUp: ['地震', '岩石爆击', '电磁炮'],
      eggMoves: ['广域防守', '陀螺球'],
      tmMoves: ['大字爆炎', '十万伏特']
    },
    evolution: []
  },
  {
    id: 78,
    name: '小拳石（阿罗拉）',
    types: ['岩石', '电'],
    abilities: ['磁力', '结实'],
    height: 0.4,
    weight: 20.3,
    form: '阿罗拉',
    skills: {
      levelUp: ['电击', '充电', '岩石打磨'],
      eggMoves: ['电磁波', '伏特替换'],
      tmMoves: ['十万伏特', '隐形岩']
    },
    evolution: [{ name: '隆隆石（阿罗拉）', condition: '25级进化' }]
  },
  {
    id: 79,
    name: '隆隆石（阿罗拉）',
    types: ['岩石', '电'],
    abilities: ['磁力', '结实'],
    height: 1.1,
    weight: 110.0,
    form: '阿罗拉',
    skills: {
      levelUp: ['放电', '电磁飘浮', '岩石炮'],
      eggMoves: ['电气场地', '锁定'],
      tmMoves: ['打雷', '电网']
    },
    evolution: [{ name: '隆隆岩（阿罗拉）', condition: '通信交换进化' }]
  },
  {
    id: 81,
    name: '小磁怪',
    types: ['电', '钢'],
    abilities: ['磁力'],
    height: 0.3,
    weight: 6.0,
    skills: {
      levelUp: ['电击', '电磁波', '磁铁炸弹'],
      eggMoves: [],
      tmMoves: ['十万伏特', '光墙']
    },
    evolution: [{ name: '三合一磁怪', condition: '30级进化' }]
  },
  {
    id: 80,
    name: '隆隆岩（阿罗拉）',
    types: ['岩石', '电'],
    abilities: ['磁力', '结实'],
    height: 1.1,
    weight: 110.0,
    form: '阿罗拉',
    skills: {
      levelUp: ['放电', '电磁飘浮', '岩石炮'],
      eggMoves: ['电气场地', '锁定'],
      tmMoves: ['打雷', '电网']
    },
    evolution: [{ name: '隆隆岩（阿罗拉）', condition: '通信交换进化' }]
  },
].sort((a, b) => a.id - b.id);