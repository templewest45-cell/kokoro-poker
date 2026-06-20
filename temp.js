
// --- Constants & Data ---
const DECK = [];
for (let i = 1; i <= 15; i++) DECK.push({ id: `Joy_${i}`, emotion: 'Joy', color: 'green', img: `cards_output_print/1_Joy_Midori_${i}_print.png` });
for (let i = 1; i <= 15; i++) DECK.push({ id: `Anger_${i}`, emotion: 'Anger', color: 'red', img: `cards_output_print/2_Anger_Aka_${i}_print.png` });
for (let i = 1; i <= 15; i++) DECK.push({ id: `Sadness_${i}`, emotion: 'Sadness', color: 'blue', img: `cards_output_print/3_Sadness_Ao_${i}_print.png` });
for (let i = 1; i <= 15; i++) DECK.push({ id: `Anxiety_${i}`, emotion: 'Anxiety', color: 'yellow', img: `cards_output_print/4_Anxiety_Kiiro_${i}_print.png` });

const complexColors = [
  ['green', 'yellow'], ['blue', 'yellow'], ['green', 'yellow'], ['green', 'blue'],
  ['green', 'red'], ['green', 'red'], ['red', 'blue'], ['blue', 'yellow'],
  ['red', 'blue'], ['red', 'yellow'], ['red', 'yellow'], ['green', 'blue']
];
const complexNames = [
  '胸が高鳴る', '気が気じゃない', 'わくわくする', 'なつかしい',
  'すっきり', '照れくさい', '歯がゆい', '拍子抜け',
  'やるせない', '焦り', 'モヤモヤ', '名残惜しい'
];
for (let i = 1; i <= 12; i++) DECK.push({ id: `Complex_${i}`, emotion: complexNames[i-1], color: 'complex', dualColors: complexColors[i-1], img: `cards_output_print/Wildcard_${i}_print.png` });

const COLORS = ['green', 'red', 'blue', 'yellow'];

// --- Assign Japanese Names ---
const greenNames = [
  "幸せ", "うれしい", "楽しい", "安心した", "期待", "自信", "誇らしい", "感謝", "達成感",
  "感動", "信頼", "愛情", "希望", "満足", "充実感"
];
const redNames = [
  "イライラ", "不満", "怒り", "悔しい", "理不尽", "反発", "嫉妬", "激怒", "憎しみ",
  "苛立ち", "もどかしい", "納得できない", "むっとする", "意地になる", "許せない"
];
const blueNames = [
  "悲しい", "傷ついた", "寂しい", "落ち込んだ", "後悔", "失望", "孤独", "無力感", "絶望",
  "残念", "喪失感", "切なさ", "虚しさ", "がっくり", "哀愁"
];
const yellowNames = [
  "びっくり", "戸惑い", "不安", "緊張", "ドキドキ", "心配", "警戒", "混乱", "恐怖",
  "困惑", "動揺", "焦り", "大あわて", "呆然", "驚愕"
];


DECK.forEach(c => {
  if (c.color === 'green') c.nameJa = greenNames[parseInt(c.id.split('_')[1]) - 1];
  else if (c.color === 'red') c.nameJa = redNames[parseInt(c.id.split('_')[1]) - 1];
  else if (c.color === 'blue') c.nameJa = blueNames[parseInt(c.id.split('_')[1]) - 1];
  else if (c.color === 'yellow') c.nameJa = yellowNames[parseInt(c.id.split('_')[1]) - 1];
  else if (c.color === 'complex') c.nameJa = complexNames[parseInt(c.id.split('_')[1]) - 1];
});


const YAKU_LIST = [
  { name: '最高の日', rubyName: '<ruby>最高<rt>さいこう</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>', example: '🟩🟩🟩🟩🟩', description: '何もかもうまくいって幸せしかない', rubyDesc: '<ruby>何<rt>なに</rt></ruby>もかもうまくいって<ruby>幸<rt>しあわ</rt></ruby>せしかない', rank: '50' },
  { name: '怒り爆発', rubyName: '<ruby>怒<rt>いか</rt></ruby>り<ruby>爆発<rt>ばくはつ</rt></ruby>', example: '🟥🟥🟥🟥🟥', description: 'おこりでいっぱい！', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りしかない、<ruby>頭<rt>あたま</rt></ruby>が<ruby>真<rt>ま</rt></ruby>っ<ruby>白<rt>しろ</rt></ruby>', rank: '50' },
  { name: '号泣', rubyName: '<ruby>号泣<rt>ごうきゅう</rt></ruby>', example: '🟦🟦🟦🟦🟦', description: 'なみだがとまらない！', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しみの<ruby>底<rt>そこ</rt></ruby>にいる、<ruby>涙<rt>なみだ</rt></ruby>が<ruby>止<rt>と</rt></ruby>まらない', rank: '50' },
  { name: 'パニック', rubyName: 'パニック', example: '🟨🟨🟨🟨🟨', description: 'あたまがぐるぐる！', rubyDesc: '<ruby>混乱<rt>こんらん</rt></ruby>しすぎて<ruby>何<rt>なに</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えられない', rank: '50' },
  { name: '泣けてくるほど嬉しい', rubyName: '<ruby>泣<rt>な</rt></ruby>けてくるほど<ruby>嬉<rt>うれ</rt></ruby>しい', example: '🟩🟩🟩🟩🟦', description: 'うれしくてなみだがでる', rubyDesc: 'うれしすぎて<ruby>涙<rt>なみだ</rt></ruby>が<ruby>出<rt>で</rt></ruby>る', rank: '40' },
  { name: '夢みたい', rubyName: '<ruby>夢<rt>ゆめ</rt></ruby>みたい', example: '🟩🟩🟩🟩🟨', description: 'しあわせすぎてしんじられない', rubyDesc: '<ruby>幸<rt>しあわ</rt></ruby>せすぎて<ruby>信<rt>しん</rt></ruby>じられない', rank: '40' },
  { name: '勝利の雄叫び', rubyName: '<ruby>勝利<rt>しょうり</rt></ruby>の<ruby>雄叫<rt>おたけ</rt></ruby>び', example: '🟩🟩🟩🟩🟥', description: 'うれしくてさけびたい', rubyDesc: 'うれしいけど<ruby>興奮<rt>こうふん</rt></ruby>して<ruby>叫<rt>さけ</rt></ruby>んでる', rank: '40' },
  { name: '悔し涙', rubyName: '<ruby>悔<rt>くや</rt></ruby>し<ruby>涙<rt>なみだ</rt></ruby>', example: '🟥🟥🟥🟥🟦', description: 'くやしくてなみだがでる', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りながら<ruby>泣<rt>な</rt></ruby>いている', rank: '40' },
  { name: '修羅場', rubyName: '<ruby>修羅場<rt>しゅらば</rt></ruby>', example: '🟥🟥🟥🟥🟨', description: 'おこりとこんらん', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りが<ruby>爆発<rt>ばくはつ</rt></ruby>して<ruby>混乱<rt>こんらん</rt></ruby>してる', rank: '40' },
  { name: 'ざまあみろ', rubyName: 'ざまあみろ', example: '🟩🟥🟥🟥🟥', description: 'かった！というきもち', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りが<ruby>勝<rt>か</rt></ruby>ったときの<ruby>快感<rt>かいかん</rt></ruby>', rank: '40' },
  { name: '雨上がり', rubyName: '<ruby>雨上<rt>あめあ</rt></ruby>がり', example: '🟩🟦🟦🟦🟦', description: 'かなしいけどほっとする', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しいけどちょっと<ruby>希望<rt>きぼう</rt></ruby>がある', rank: '40' },
  { name: '恨み節', rubyName: '<ruby>恨<rt>うら</rt></ruby>み<ruby>節<rt>ぶし</rt></ruby>', example: '🟥🟦🟦🟦🟦', description: 'かなしくておこっている', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しみの<ruby>中<rt>なか</rt></ruby>に<ruby>怒<rt>いか</rt></ruby>りが<ruby>残<rt>のこ</rt></ruby>っている', rank: '40' },
  { name: '迷子', rubyName: '<ruby>迷子<rt>まいご</rt></ruby>', example: '🟦🟦🟦🟦🟨', description: 'かなしくてふあん', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しくて<ruby>不安<rt>ふあん</rt></ruby>でどうしたらいい', rank: '40' },
  { name: '祭りの前', rubyName: '<ruby>祭<rt>まつ</rt></ruby>りの<ruby>前<rt>まえ</rt></ruby>', example: '🟩🟨🟨🟨🟨', description: 'ドキドキワクワク', rubyDesc: '<ruby>緊張<rt>きんちょう</rt></ruby>してるけどワクワクしてる', rank: '40' },
  { name: '空回り', rubyName: '<ruby>空回<rt>からまわ</rt></ruby>り', example: '🟥🟨🟨🟨🟨', description: 'あせってイライラ', rubyDesc: '<ruby>焦<rt>あせ</rt></ruby>って<ruby>怒<rt>いか</rt></ruby>りになっている', rank: '40' },
  { name: '悪夢', rubyName: '<ruby>悪夢<rt>あくむ</rt></ruby>', example: '🟦🟨🟨🟨🟨', description: 'こわくてこんらん', rubyDesc: '<ruby>混乱<rt>こんらん</rt></ruby>して<ruby>怖<rt>こわ</rt></ruby>くて<ruby>仕方<rt>しかた</rt></ruby>ない', rank: '40' },
  { name: '遠足前夜', rubyName: '<ruby>遠足<rt>えんそく</rt></ruby><ruby>前夜<rt>ぜんや</rt></ruby>', example: '🟩🟩🟩🟨🟨', description: 'たのしみでドキドキ', rubyDesc: '<ruby>楽<rt>たの</rt></ruby>しみでドキドキが<ruby>止<rt>と</rt></ruby>まらない', rank: '30' },
  { name: '泣き笑い', rubyName: '<ruby>泣<rt>な</rt></ruby>き<ruby>笑<rt>わら</rt></ruby>い', example: '🟩🟩🟩🟦🟦', description: 'うれしいのにちょっぴりかなしい', rubyDesc: 'うれしいのにじんわり<ruby>悲<rt>かな</rt></ruby>しい', rank: '30' },
  { name: '燃える闘志', rubyName: '<ruby>燃<rt>も</rt></ruby>える<ruby>闘志<rt>とうし</rt></ruby>', example: '🟩🟩🟩🟥🟥', description: 'たのしい！でもまけたくない！', rubyDesc: '<ruby>楽<rt>たの</rt></ruby>しくて<ruby>負<rt>ま</rt></ruby>けたくない', rank: '30' },
  { name: '一触即発', rubyName: '<ruby>一触即発<rt>いっしょくそくはつ</rt></ruby>', example: '🟥🟥🟥🟨🟨', description: 'おこりがばくはつしそう', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りが<ruby>爆発<rt>ばくはつ</rt></ruby>しそうで<ruby>焦<rt>あせ</rt></ruby>っている', rank: '30' },
  { name: '怒りの涙', rubyName: '<ruby>怒<rt>いか</rt></ruby>りの<ruby>涙<rt>なみだ</rt></ruby>', example: '🟥🟥🟥🟦🟦', description: 'おこりとかなしみ', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りが<ruby>強<rt>つよ</rt></ruby>いけど<ruby>悲<rt>かな</rt></ruby>しくて<ruby>泣<rt>な</rt></ruby>いてる', rank: '30' },
  { name: '悔しいけど認める', rubyName: '<ruby>悔<rt>くや</rt></ruby>しいけど<ruby>認<rt>みと</rt></ruby>める', example: '🟩🟩🟥🟥🟥', description: 'くやしいけどすごい！', rubyDesc: '<ruby>負<rt>ま</rt></ruby>けたけど<ruby>相手<rt>あいて</rt></ruby>を<ruby>認<rt>みと</rt></ruby>めている', rank: '30' },
  { name: '心細い夜', rubyName: '<ruby>心細<rt>こころぼそ</rt></ruby>い<ruby>夜<rt>よる</rt></ruby>', example: '🟦🟦🟦🟨🟨', description: 'かなしくてふあん', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しくて<ruby>不安<rt>ふあん</rt></ruby>で<ruby>眠<rt>ねむ</rt></ruby>れない', rank: '30' },
  { name: '悔し泣き', rubyName: '<ruby>悔<rt>くや</rt></ruby>し<ruby>泣<rt>な</rt></ruby>き', example: '🟥🟥🟦🟦🟦', description: 'かなしいしくやしい', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しみの<ruby>中<rt>なか</rt></ruby>に<ruby>怒<rt>いか</rt></ruby>りがある', rank: '30' },
  { name: '立ち直りかけ', rubyName: '<ruby>立<rt>た</rt></ruby>ち<ruby>直<rt>なお</rt></ruby>りかけ', example: '🟩🟩🟦🟦🟦', description: 'げんきがもどりそう', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しいけど<ruby>少<rt>すこ</rt></ruby>しずつ<ruby>前<rt>まえ</rt></ruby>を<ruby>向<rt>む</rt></ruby>いてる', rank: '30' },
  { name: '初舞台', rubyName: '<ruby>初舞台<rt>はつぶたい</rt></ruby>', example: '🟩🟩🟨🟨🟨', description: 'きんちょう！でもうれしい！', rubyDesc: '<ruby>緊張<rt>きんちょう</rt></ruby>してるけどうれしくてたまらない', rank: '30' },
  { name: '空回り（焦→怒）', rubyName: '<ruby>空回<rt>からまわ</rt></ruby>り（<ruby>焦<rt>あせ</rt></ruby>→<ruby>怒<rt>いか</rt></ruby>）', example: '🟥🟥🟨🟨🟨', description: 'あせりがイライラになる', rubyDesc: '<ruby>焦<rt>あせ</rt></ruby>りが<ruby>怒<rt>いか</rt></ruby>になっていく', rank: '30' },
  { name: '嵐の前', rubyName: '<ruby>嵐<rt>あらし</rt></ruby>の<ruby>前<rt>まえ</rt></ruby>', example: '🟦🟦🟨🟨🟨', description: 'ふあんでいっぱい', rubyDesc: '<ruby>不安<rt>ふあん</rt></ruby>と<ruby>悲<rt>かな</rt></ruby>しみで<ruby>胸<rt>むね</rt></ruby>がいっぱい', rank: '30' },
  { name: '感動', rubyName: '<ruby>感動<rt>かんどう</rt></ruby>', example: '🟩🟩🟩🟥🟦', description: 'むねがあつくなる', rubyDesc: 'うれしくて<ruby>泣<rt>な</rt></ruby>きそうで<ruby>胸<rt>むね</rt></ruby>が<ruby>熱<rt>あつ</rt></ruby>い', rank: '20' },
  { name: '大興奮', rubyName: '<ruby>大興奮<rt>だいこうふん</rt></ruby>', example: '🟩🟩🟩🟥🟨', description: 'たのしくてさけびたい', rubyDesc: '<ruby>楽<rt>たの</rt></ruby>しくて<ruby>叫<rt>さけ</rt></ruby>びたくてドキドキ', rank: '20' },
  { name: '卒業式', rubyName: '<ruby>卒業式<rt>そつぎょうしき</rt></ruby>', example: '🟩🟩🟩🟦🟨', description: 'うれしいかなしいドキドキ', rubyDesc: 'うれしいけど<ruby>悲<rt>かな</rt></ruby>しくて<ruby>緊張<rt>きんちょう</rt></ruby>してる', rank: '20' },
  { name: '反省', rubyName: '<ruby>反省<rt>はんせい</rt></ruby>', example: '🟩🟥🟥🟥🟦', description: 'わるかったな…', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>ったけど<ruby>悪<rt>わる</rt></ruby>かったと<ruby>気<rt>き</rt></ruby>づいてる', rank: '20' },
  { name: 'ライバル', rubyName: 'ライバル', example: '🟩🟥🟥🟥🟨', description: 'まけたくない！', rubyDesc: '<ruby>悔<rt>くや</rt></ruby>しいけど<ruby>燃<rt>も</rt></ruby>えててドキドキ', rank: '20' },
  { name: '八つ当たり', rubyName: '<ruby>八<rt>や</rt></ruby>つ<ruby>当<rt>あ</rt></ruby>たり', example: '🟥🟥🟥🟦🟨', description: 'ほんとはかなしい', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りをぶつけてるけど<ruby>実<rt>じつ</rt></ruby>は<ruby>悲<rt>かな</rt></ruby>しい', rank: '20' },
  { name: '複雑', rubyName: '<ruby>複雑<rt>ふくざつ</rt></ruby>', example: '🟩🟥🟦🟦🟦', description: 'いろんなきもちがまざる', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しいのにうれしくて<ruby>悔<rt>くや</rt></ruby>しい', rank: '20' },
  { name: '引っ越し', rubyName: '<ruby>引<rt>ひ</rt></ruby>っ<ruby>越<rt>こ</rt></ruby>し', example: '🟩🟦🟦🟦🟨', description: 'かなしいけどワクワク', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しいけど<ruby>新<rt>あたら</rt></ruby>しい<ruby>場所<rt>ばしょ</rt></ruby>にワクワク', rank: '20' },
  { name: '嵐の中', rubyName: '<ruby>嵐<rt>あらし</rt></ruby>の<ruby>中<rt>なか</rt></ruby>', example: '🟥🟦🟦🟦🟨', description: 'かなしいおこりふあん', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しくて<ruby>怒<rt>いか</rt></ruby>ってて<ruby>不安<rt>ふあん</rt></ruby>でいっぱい', rank: '20' },
  { name: '文化祭前日', rubyName: '<ruby>文化祭<rt>ぶんかさい</rt></ruby><ruby>前日<rt>ぜんじつ</rt></ruby>', example: '🟩🟥🟨🟨🟨', description: 'ドキドキワクワクメラメラ', rubyDesc: '<ruby>緊張<rt>きんちょう</rt></ruby>してるけど<ruby>楽<rt>たの</rt></ruby>しみで<ruby>燃<rt>も</rt></ruby>えてる', rank: '20' },
  { name: '旅立ち', rubyName: '<ruby>旅立<rt>たびだ</rt></ruby>ち', example: '🟩🟦🟨🟨🟨', description: 'うれしいけどさみしい', rubyDesc: 'ドキドキしてうれしくて<ruby>少<rt>すこ</rt></ruby>し<ruby>寂<rt>さび</rt></ruby>しい', rank: '20' },
  { name: '修羅場寸前', rubyName: '<ruby>修羅場<rt>しゅらば</rt></ruby><ruby>寸前<rt>すんぜん</rt></ruby>', example: '🟥🟦🟨🟨🟨', description: 'ぐるぐるこんらん', rubyDesc: '<ruby>焦<rt>あせ</rt></ruby>りと<ruby>怒<rt>いか</rt></ruby>りと<ruby>悲<rt>かな</rt></ruby>しみがぐるぐる', rank: '20' },
  { name: '熱くなりすぎた', rubyName: '<ruby>熱<rt>あつ</rt></ruby>くなりすぎた', example: '🟩🟩🟥🟥🟦', description: 'やりすぎちゃった', rubyDesc: '<ruby>楽<rt>たの</rt></ruby>しくて<ruby>興奮<rt>こうふん</rt></ruby>してたけど<ruby>後悔<rt>こうかい</rt></ruby>', rank: '10' },
  { name: '真剣勝負', rubyName: '<ruby>真剣<rt>しんけん</rt></ruby><ruby>勝負<rt>しょうぶ</rt></ruby>', example: '🟩🟩🟥🟥🟨', description: 'ぜったいかちたい', rubyDesc: '<ruby>楽<rt>たの</rt></ruby>しくて<ruby>悔<rt>くや</rt></ruby>しくてドキドキ', rank: '10' },
  { name: '悔しい感動', rubyName: '<ruby>悔<rt>くや</rt></ruby>しい<ruby>感動<rt>かんどう</rt></ruby>', example: '🟩🟩🟥🟦🟦', description: 'くやしいけどうれしい', rubyDesc: 'うれしくて<ruby>悲<rt>かな</rt></ruby>しくて<ruby>負<rt>ま</rt></ruby>けたくない', rank: '10' },
  { name: '虹', rubyName: '<ruby>虹<rt>にじ</rt></ruby>', example: '🟩🟩🟦🟦🟨', description: 'ふしぎなきもち', rubyDesc: 'うれしくて<ruby>悲<rt>かな</rt></ruby>しくて<ruby>不思議<rt>ふしぎ</rt></ruby>な<ruby>気持<rt>きも</rt></ruby>ち', rank: '10' },
  { name: '文化祭', rubyName: '<ruby>文化祭<rt>ぶんかさい</rt></ruby>', example: '🟩🟩🟥🟨🟨', description: 'たのしい！ドキドキ！', rubyDesc: '<ruby>楽<rt>たの</rt></ruby>しくてドキドキして<ruby>燃<rt>も</rt></ruby>えてる', rank: '10' },
  { name: '初恋', rubyName: '<ruby>初恋<rt>はつこい</rt></ruby>', example: '🟩🟩🟦🟨🟨', description: 'うれしいけどせつない', rubyDesc: 'うれしくてドキドキして<ruby>切<rt>せつ</rt></ruby>ない', rank: '10' },
  { name: '仲直り', rubyName: '<ruby>仲直<rt>なかなお</rt></ruby>り', example: '🟩🟥🟥🟦🟦', description: 'また なかよし', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>って<ruby>泣<rt>な</rt></ruby>いてでも<ruby>少<rt>すこ</rt></ruby>し<ruby>前向<rt>まえむ</rt></ruby>き', rank: '10' },
  { name: '板挟み', rubyName: '<ruby>板挟<rt>いたばさ</rt></ruby>み', example: '🟥🟥🟦🟦🟨', description: 'どうしたらいいの？', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りと<ruby>悲<rt>かな</rt></ruby>しみで<ruby>混乱<rt>こんらん</rt></ruby>してる', rank: '10' },
  { name: '意地', rubyName: '<ruby>意地<rt>いじ</rt></ruby>', example: '🟩🟥🟥🟨🟨', description: 'まだ あきらめない', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>って<ruby>焦<rt>あせ</rt></ruby>ってるけど<ruby>諦<rt>あきら</rt></ruby>めない', rank: '10' },
  { name: '空回りの涙', rubyName: '<ruby>空回<rt>からまわ</rt></ruby>りの<ruby>涙<rt>なみだ</rt></ruby>', example: '🟥🟥🟦🟨🟨', description: 'あせってなみだ', rubyDesc: '<ruby>焦<rt>あせ</rt></ruby>って<ruby>怒<rt>いか</rt></ruby>って<ruby>悲<rt>かな</rt></ruby>しくなってきた', rank: '10' },
  { name: '夜明け前', rubyName: '<ruby>夜明<rt>よあ</rt></ruby>け<ruby>前<rt>まえ</rt></ruby>', example: '🟩🟦🟦🟨🟨', description: 'もうすこしでがんばれそう', rubyDesc: '<ruby>不安<rt>ふあん</rt></ruby>で<ruby>悲<rt>かな</rt></ruby>しいけど<ruby>少<rt>すこ</rt></ruby>し<ruby>希望<rt>きぼう</rt></ruby>がある', rank: '10' },
  { name: '追い詰められた', rubyName: '<ruby>追<rt>お</rt></ruby>い<ruby>詰<rt>つ</rt></ruby>められた', example: '🟥🟦🟦🟨🟨', description: 'もう いっぱいいっぱい', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しくて<ruby>不安<rt>ふあん</rt></ruby>で<ruby>怒<rt>いか</rt></ruby>りがこみあげる', rank: '10' },
  { name: 'ちょっとうれしい', rubyName: 'ちょっとうれしい', example: '🟩🟩🟥🟦🟨', description: 'しあわせがちらっとある', rubyDesc: '<ruby>幸<rt>しあわ</rt></ruby>せがちらっとある', rank: '5' },
  { name: 'ちょっとイライラ', rubyName: 'ちょっとイライラ', example: '🟩🟥🟥🟦🟨', description: 'おこりがくすぶってる', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りがくすぶってる', rank: '5' },
  { name: 'ちょっと悲しい', rubyName: 'ちょっと悲しい', example: '🟩🟥🟦🟦🟨', description: 'かなしさがこころのかたすみに', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しさが<ruby>心<rt>こころ</rt></ruby>の<ruby>片隅<rt>かたすみ</rt></ruby>に', rank: '5' },
  { name: 'ちょっとドキドキ', rubyName: 'ちょっとドキドキ', example: '🟩🟥🟦🟨🟨', description: 'きんちょうがじわっとある', rubyDesc: '<ruby>緊張<rt>きんちょう</rt></ruby>がじわっとある', rank: '5' },
  { name: 'ジェットコースター', rubyName: 'ジェットコースター', example: '🟩🟥🟦🟨⬜', description: 'いろんなきもちがぐるぐるまざっているよ！これも、とても大事なきもちだよ。', rubyDesc: '<ruby>感情<rt>かんじょう</rt></ruby>がぐちゃぐちゃ。<ruby>役<rt>やく</rt></ruby>なしだが<ruby>学習的<rt>がくしゅうてき</rt></ruby>には<ruby>一番<rt>いちばん</rt></ruby>リアル', rank: '0' },
];

const LIGHT_YAKU_LIST = [
  { name: '最高の日 (緑3)', rubyName: '<ruby>最高<rt>さいこう</rt></ruby>の<ruby>日<rt>ひ</rt></ruby>', example: '🟩🟩🟩', description: '何もかもうまくいって幸せ', rubyDesc: '<ruby>何<rt>なに</rt></ruby>もかもうまくいって<ruby>幸<rt>しあわ</rt></ruby>せ', rank: '50' },
  { name: '怒り爆発 (赤3)', rubyName: '<ruby>怒<rt>いか</rt></ruby>り<ruby>爆発<rt>ばくはつ</rt></ruby>', example: '🟥🟥🟥', description: '怒りしかない', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りしかない', rank: '50' },
  { name: '号泣 (青3)', rubyName: '<ruby>号泣<rt>ごうきゅう</rt></ruby>', example: '🟦🟦🟦', description: '悲しみの底にいる', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しみの<ruby>底<rt>そこ</rt></ruby>にいる', rank: '50' },
  { name: 'パニック (黄3)', rubyName: 'パニック', example: '🟨🟨🟨', description: 'あたまがぐるぐる！', rubyDesc: '<ruby>混乱<rt>こんらん</rt></ruby>しすぎて<ruby>何<rt>なに</rt></ruby>も<ruby>考<rt>かんが</rt></ruby>えられない', rank: '50' },
  { name: 'ちょっとうれしい (緑2)', rubyName: 'ちょっとうれしい', example: '🟩🟩🟦', description: 'しあわせがちらっとある', rubyDesc: '<ruby>幸<rt>しあわ</rt></ruby>せがちらっとある', rank: '40' },
  { name: 'ちょっとイライラ (赤2)', rubyName: 'ちょっとイライラ', example: '🟥🟥🟨', description: 'おこりがくすぶってる', rubyDesc: '<ruby>怒<rt>いか</rt></ruby>りがくすぶってる', rank: '40' },
  { name: 'ちょっと悲しい (青2)', rubyName: 'ちょっと悲しい', example: '🟦🟦🟩', description: 'かなしさがこころのかたすみに', rubyDesc: '<ruby>悲<rt>かな</rt></ruby>しさが<ruby>心<rt>こころ</rt></ruby>の<ruby>片隅<rt>かたすみ</rt></ruby>に', rank: '40' },
  { name: 'ちょっとドキドキ (黄2)', rubyName: 'ちょっとドキドキ', example: '🟨🟨🟥', description: 'きんちょうがじわっとある', rubyDesc: '<ruby>緊張<rt>きんちょう</rt></ruby>がじわっとある', rank: '40' },
  { name: 'カラフル', rubyName: 'カラフル', example: '🟩🟥🟦', description: 'いろんな感情が混ざっている', rubyDesc: 'いろんな<ruby>感情<rt>かんじょう</rt></ruby>が<ruby>混<rt>ま</rt></ruby>ざっている', rank: '0' },
];

// --- State ---
let currentMode = null;
let currentDeck = [];
let currentHand = [];
let dealerHand = [];
let toExchange = [];
let gameState = 'draw1'; // 'draw1' or 'result'
let playerProfile = { name: 'あなた', avatar: null };

let challengeHP = 3;
let challengeCoins = 0;
const CHALLENGE_GOAL = 5;
let lastEncounteredOpponent = -1;

const CHALLENGE_OPPONENTS = [
  { 
    name: 'よろこびの ハル', avatar: 'avatars/player3_girlA.png', preferColor: 'green',
    introMsg: '「うれしいカードをたくさん集めて、もっとハッピーになりたいな！」',
    winMsg: '「やったー！すっごくうれしい！最高の日だね！」',
    loseMsg: '「負けちゃったけど、一緒に遊べてうれしかったよ！」',
    drawMsg: '「引き分けだね！どっちもがんばったね！」'
  },
  { 
    name: 'いかりの ケン', avatar: 'avatars/player1_boyA.png', preferColor: 'red',
    introMsg: '「なんだよ！俺は今すごくイライラしてるんだ！勝負しろ！」',
    winMsg: '「へっ！俺の怒りパワーの勝ちだな！ざまあみろ！」',
    loseMsg: '「くそーっ！負けるなんて腹が立つ！もう一回だ！」',
    drawMsg: '「決着がつかないなんて…イライラするぜ！」'
  },
  { 
    name: 'かなしみの ユキ', avatar: 'avatars/player4_girlB.png', preferColor: 'blue',
    introMsg: '「なんだか悲しい気分なの…。お手柔らかにね…」',
    winMsg: '「勝てた…。でも、相手を負かしてしまって少し悲しいかも…」',
    loseMsg: '「やっぱり負けちゃった…。ぐすっ…」',
    drawMsg: '「引き分け…。なんだか切ないね…」'
  },
  { 
    name: 'おどろきの トモ', avatar: 'avatars/player2_boyB.png', preferColor: 'yellow',
    introMsg: '「うわっ、びっくりした！君が次の相手！？ドキドキするよー！」',
    winMsg: '「えっ、僕の勝ち！？信じられない！すごい！」',
    loseMsg: '「うわぁっ、負けちゃった！君って強くてびっくりだよ！」',
    drawMsg: '「おっと！引き分けだなんて驚きだね！」'
  },
  { 
    name: 'たのしみの オコジョ', avatar: 'avatars/okojo.png', preferColor: 'smart',
    introMsg: '「キュッキュー！ここまで来るなんてやるね！全力で楽しもう！」',
    winMsg: '「キュー！ぼくの勝ち！すっごく楽しい勝負だったよ！」',
    loseMsg: '「きゅ〜ん…負けちゃった。でも君のプレイング、お見事！」',
    drawMsg: '「キュー！いい勝負！ワクワクしっぱなしだよ！」'
  }
];

function updateChallengeUI() {
  document.getElementById('challenge-hp').innerText = challengeHP;
  document.getElementById('challenge-coins').innerText = challengeCoins;
}

function handleReplayClick() {
  if (currentMode === 'challenge') {
    if (challengeHP <= 0 || challengeCoins >= CHALLENGE_GOAL) {
      showMenu();
      return;
    }
  }
  startRound(currentMode, true);
}

function loadPlayerProfile() {
  const saved = localStorage.getItem('kokoroPokerPlayer');
  if (saved) {
    try {
      playerProfile = JSON.parse(saved);
    } catch(e) {}
  }
}
loadPlayerProfile();


function openCardListModal() {
  const container = document.getElementById('card-list-container');
  if (container.innerHTML.trim() === '') {
    const categories = [
      { id: 'basic', name: '🌱 ベーシックセット（1〜9）', min: 1, max: 9, descKey: 'descBasic' },
      { id: 'standard', name: '☀️ スタンダードセット追加分（10〜15）', min: 10, max: 15, descKey: 'descStandard' },
      { id: 'complex', name: '🧩 複合感情カード（ツートンカラー枠）', min: 1, max: 12, descKey: 'descComplex' }
    ];
        const colors = [
      { id: 'green', name: '🟢 喜び（緑）', 
        descBasic: '幸せ、うれしい、楽しい、安心した、期待、自信、誇らしい、感謝、達成感', 
        descStandard: '感動、信頼、愛情、希望、満足、充実感' },
      { id: 'red', name: '🔴 怒り（赤）', 
        descBasic: 'イライラ、不満、怒り、悔しい、理不尽、反発、嫉妬、激怒、憎しみ', 
        descStandard: '苛立ち、もどかしい、納得できない、むっとする、意地になる、許せない' },
      { id: 'blue', name: '🔵 悲しみ（青）', 
        descBasic: '悲しい、傷ついた、寂しい、落ち込んだ、後悔、失望、孤独、無力感、絶望', 
        descStandard: '残念、喪失感、切なさ、虚しさ、がっくり、哀愁' },
      { id: 'yellow', name: '🟡 不安・驚き（黄）', 
        descBasic: 'びっくり、戸惑い、不安、緊張、ドキドキ、心配、警戒、混乱、恐怖', 
        descStandard: '困惑、動揺、焦り、大あわて、呆然、驚愕' },
      { id: 'complex', name: '🧩 複合感情セット', 
        descComplex: '胸が高鳴る、気が気じゃない、わくわくする、なつかしい、すっきり、照れくさい、歯がゆい、拍子抜け、やるせない、焦り、モヤモヤ、名残惜しい' }
    ];
    
    let htmlStr = '';
    categories.forEach(cat => {
      htmlStr += `<div style="margin-bottom: 2rem;">`;
      htmlStr += `<h2 style="margin-bottom:0.5rem; color:var(--text-main); border-bottom: 3px solid var(--gold); padding-bottom: 0.5rem; font-size: 1.4rem; font-weight: bold;">${cat.name}</h2>`;
      
      colors.forEach(col => {
        // Only show complex colors in complex category, and regular colors in regular categories
        if (cat.id === 'complex' && col.id !== 'complex') return;
        if (cat.id !== 'complex' && col.id === 'complex') return;
        
        const cards = DECK.filter(c => {
          if (c.color !== col.id) return false;
          const match = c.id.match(/_(\d+)$/);
          if (match) {
            const num = parseInt(match[1]);
            return num >= cat.min && num <= cat.max;
          }
          return false;
        });
        
        if (cards.length > 0) {
          htmlStr += `<div style="margin-bottom: 1.5rem; background: rgba(255,255,255,0.5); padding: 1rem; border-radius: 12px; border: 1px solid rgba(0,0,0,0.05);">`;
          htmlStr += `<h4 style="margin-bottom:0.3rem; color:var(--text-main); font-size: 1.1rem; font-weight: bold;">${col.name}</h4>`;
          if (col[cat.descKey]) {
            htmlStr += `<div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 1rem; line-height: 1.5;">${col[cat.descKey]}</div>`;
          }
          htmlStr += `<div style="display:flex; flex-wrap:wrap; gap:0.5rem; justify-content:flex-start;">`;
          cards.forEach(c => {
            const isCollected = collectedCards.includes(c.id);
            if (isCollected) {
              const safeName = (c.nameJa || '').replace(/'/g, "\\'");
              htmlStr += `
                <div style="cursor: pointer; text-align: center;" onclick="openCardDetailModal('${safeName}', '${c.img}')">
                  <img src="${c.img}" style="width: 70px; height: 115px; border-radius: 6px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);" alt="${c.nameJa}">
                </div>`;
            } else {
              htmlStr += `
                <div style="text-align: center;">
                  <div style="width: 70px; height: 115px; border-radius: 6px; background: #cbd5e1; display: flex; align-items: center; justify-content: center; color: white; font-size: 2rem; font-weight: bold;">?</div>
                </div>`;
            }
          });
          htmlStr += `</div></div>`;
        }
      });
      htmlStr += `</div>`;
    });
    
    container.innerHTML = htmlStr;
  }
  document.getElementById('card-list-modal').classList.add('open');
}

function closeCardListModal() {
  document.getElementById('card-list-modal').classList.remove('open');
}

function openChallengeTutorialModal() {
  document.getElementById('challenge-tutorial-modal').classList.add('open');
}
function closeChallengeTutorialModal() {
  document.getElementById('challenge-tutorial-modal').classList.remove('open');
}

function openOpponentSpeechModal(title, opp, msg, btnText, btnAction, pYakuDef, dYakuDef) {
  document.getElementById('opponent-speech-title').innerText = title;
  document.getElementById('opponent-speech-img').src = opp.avatar;
  document.getElementById('opponent-speech-name').innerText = opp.name;
  document.getElementById('opponent-speech-msg').innerHTML = msg;
  
  const resultInfo = document.getElementById('opponent-speech-result-info');
  if (pYakuDef && dYakuDef) {
    resultInfo.classList.remove('hidden');
    document.getElementById('speech-result-p-name').innerHTML = pYakuDef.rubyName || pYakuDef.name;
    document.getElementById('speech-result-p-desc').innerHTML = pYakuDef.rubyDesc || pYakuDef.description;
    document.getElementById('speech-result-d-name').innerHTML = dYakuDef.rubyName || dYakuDef.name;
    document.getElementById('speech-result-d-desc').innerHTML = dYakuDef.rubyDesc || dYakuDef.description;
    
    // Set Yaku Image if available
    const pImg = document.getElementById('speech-result-p-img');
    pImg.src = `avatars/yaku/${pYakuDef.name}.png`;
    pImg.style.display = 'inline-block';
    pImg.onerror = () => pImg.style.display = 'none';

    const dImg = document.getElementById('speech-result-d-img');
    dImg.src = `avatars/yaku/${dYakuDef.name}.png`;
    dImg.style.display = 'inline-block';
    dImg.onerror = () => dImg.style.display = 'none';
  } else {
    resultInfo.classList.add('hidden');
  }

  const btn = document.getElementById('opponent-speech-btn');
  btn.innerHTML = btnText;
  btn.onclick = () => {
    document.getElementById('opponent-speech-modal').classList.remove('open');
    if (btnAction) btnAction();
  };
  
  document.getElementById('opponent-speech-modal').classList.add('open');
}

// Ensure it exists in global scope
window.openCardListModal = openCardListModal;
window.closeCardListModal = closeCardListModal;

// --- Game Logic ---
function shuffleDeck() {
  const deck = [...DECK];
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
}

function evaluate5CardsNoWild(colors) {
  const c = {green:0, red:0, blue:0, yellow:0};
  colors.forEach(col => c[col]++);
  const G=c.green, R=c.red, B=c.blue, Y=c.yellow;

  if(G===5) return {name:'最高の日', description:'何もかもうまくいって幸せしかない', rank:50};
  if(R===5) return {name:'怒り爆発', description:'おこりでいっぱい！', rank:50};
  if(B===5) return {name:'号泣', description:'なみだがとまらない！', rank:50};
  if(Y===5) return {name:'パニック', description:'あたまがぐるぐる！', rank:50};

  if(G===4 && B===1) return {name:'泣けてくるほど嬉しい', description:'うれしくてなみだがでる', rank:40};
  if(G===4 && Y===1) return {name:'夢みたい', description:'しあわせすぎてしんじられない', rank:40};
  if(G===4 && R===1) return {name:'勝利の雄叫び', description:'うれしくてさけびたい', rank:40};
  if(R===4 && B===1) return {name:'悔し涙', description:'くやしくてなみだがでる', rank:40};
  if(R===4 && Y===1) return {name:'修羅場', description:'おこりとこんらん', rank:40};
  if(R===4 && G===1) return {name:'ざまあみろ', description:'かった！というきもち', rank:40};
  if(B===4 && G===1) return {name:'雨上がり', description:'かなしいけどほっとする', rank:40};
  if(B===4 && R===1) return {name:'恨み節', description:'かなしくておこっている', rank:40};
  if(B===4 && Y===1) return {name:'迷子', description:'かなしくてふあん', rank:40};
  if(Y===4 && G===1) return {name:'祭りの前', description:'ドキドキワクワク', rank:40};
  if(Y===4 && R===1) return {name:'空回り', description:'あせってイライラ', rank:40};
  if(Y===4 && B===1) return {name:'悪夢', description:'こわくてこんらん', rank:40};

  if(G===3 && Y===2) return {name:'遠足前夜', description:'たのしみでドキドキ', rank:30};
  if(G===3 && B===2) return {name:'泣き笑い', description:'うれしいのにちょっぴりかなしい', rank:30};
  if(G===3 && R===2) return {name:'燃える闘志', description:'たのしい！でもまけたくない！', rank:30};
  if(R===3 && Y===2) return {name:'一触即発', description:'おこりがばくはつしそう', rank:30};
  if(R===3 && B===2) return {name:'怒りの涙', description:'おこりとかなしみ', rank:30};
  if(R===3 && G===2) return {name:'悔しいけど認める', description:'くやしいけどすごい！', rank:30};
  if(B===3 && Y===2) return {name:'心細い夜', description:'かなしくてふあん', rank:30};
  if(B===3 && R===2) return {name:'悔し泣き', description:'かなしいしくやしい', rank:30};
  if(B===3 && G===2) return {name:'立ち直りかけ', description:'げんきがもどりそう', rank:30};
  if(Y===3 && G===2) return {name:'初舞台', description:'きんちょう！でもうれしい！', rank:30};
  if(Y===3 && R===2) return {name:'空回り（焦→怒）', description:'あせりがイライラになる', rank:30};
  if(Y===3 && B===2) return {name:'嵐の前', description:'ふあんでいっぱい', rank:30};

  if(G===3 && R===1 && B===1) return {name:'感動', description:'むねがあつくなる', rank:20};
  if(G===3 && R===1 && Y===1) return {name:'大興奮', description:'たのしくてさけびたい', rank:20};
  if(G===3 && B===1 && Y===1) return {name:'卒業式', description:'うれしいかなしいドキドキ', rank:20};
  if(R===3 && G===1 && B===1) return {name:'反省', description:'わるかったな…', rank:20};
  if(R===3 && G===1 && Y===1) return {name:'ライバル', description:'まけたくない！', rank:20};
  if(R===3 && B===1 && Y===1) return {name:'八つ当たり', description:'ほんとはかなしい', rank:20};
  if(B===3 && G===1 && R===1) return {name:'複雑', description:'いろんなきもちがまざる', rank:20};
  if(B===3 && G===1 && Y===1) return {name:'引っ越し', description:'かなしいけどワクワク', rank:20};
  if(B===3 && R===1 && Y===1) return {name:'嵐の中', description:'かなしいおこりふあん', rank:20};
  if(Y===3 && G===1 && R===1) return {name:'文化祭前日', description:'ドキドキワクワクメラメラ', rank:20};
  if(Y===3 && G===1 && B===1) return {name:'旅立ち', description:'うれしいけどさみしい', rank:20};
  if(Y===3 && R===1 && B===1) return {name:'修羅場寸前', description:'ぐるぐるこんらん', rank:20};

  if(G===2 && R===2 && B===1) return {name:'熱くなりすぎた', description:'やりすぎちゃった', rank:10};
  if(G===2 && R===2 && Y===1) return {name:'真剣勝負', description:'ぜったいかちたい', rank:10};
  if(G===2 && B===2 && R===1) return {name:'悔しい感動', description:'くやしいけどうれしい', rank:10};
  if(G===2 && B===2 && Y===1) return {name:'虹', description:'ふしぎなきもち', rank:10};
  if(G===2 && Y===2 && R===1) return {name:'文化祭', description:'たのしい！ドキドキ！', rank:10};
  if(G===2 && Y===2 && B===1) return {name:'初恋', description:'うれしいけどせつない', rank:10};
  if(R===2 && B===2 && G===1) return {name:'仲直り', description:'また なかよし', rank:10};
  if(R===2 && B===2 && Y===1) return {name:'板挟み', description:'どうしたらいいの？', rank:10};
  if(R===2 && Y===2 && G===1) return {name:'意地', description:'まだ あきらめない', rank:10};
  if(R===2 && Y===2 && B===1) return {name:'空回りの涙', description:'あせってなみだ', rank:10};
  if(B===2 && Y===2 && G===1) return {name:'夜明け前', description:'もうすこしでがんばれそう', rank:10};
  if(B===2 && Y===2 && R===1) return {name:'追い詰められた', description:'もう いっぱいいっぱい', rank:10};

  if(G===2 && R===1 && B===1 && Y===1) return {name:'ちょっとうれしい', description:'しあわせがちらっとある', rank:5};
  if(R===2 && G===1 && B===1 && Y===1) return {name:'ちょっとイライラ', description:'おこりがくすぶってる', rank:5};
  if(B===2 && G===1 && R===1 && Y===1) return {name:'ちょっと悲しい', description:'かなしさがこころのかたすみに', rank:5};
  if(Y===2 && G===1 && R===1 && B===1) return {name:'ちょっとドキドキ', description:'きんちょうがじわっとある', rank:5};

  if(G>=1 && R>=1 && B>=1 && Y>=1) return {name:'ジェットコースター', description:'感情がぐちゃぐちゃ', rank:0};

  return {name:'役なし', description:'役なし', rank:-1};
}

function evaluate3CardsNoWild(colors) {
  const c = {green:0, red:0, blue:0, yellow:0};
  colors.forEach(col => c[col]++);
  
  if (c.green === 3) return {name: '最高の日', description:'何もかもうまくいって幸せ', rank:50};
  if (c.red === 3) return {name: '怒り爆発', description:'怒りしかない', rank:50};
  if (c.blue === 3) return {name: '号泣', description:'悲しみの底にいる', rank:50};
  if (c.yellow === 3) return {name: 'パニック', description:'あたまがぐるぐる！', rank:50};
  
  if (c.green === 2) return {name: 'ちょっとうれしい', description:'しあわせがちらっとある', rank:40};
  if (c.red === 2) return {name: 'ちょっとイライラ', description:'おこりがくすぶってる', rank:40};
  if (c.blue === 2) return {name: 'ちょっと悲しい', description:'かなしさがこころのかたすみに', rank:40};
  if (c.yellow === 2) return {name: 'ちょっとドキドキ', description:'きんちょうがじわっとある', rank:40};
  
  return {name: 'カラフル', description: 'いろんな感情が混ざっている', rank:0};
}

function evaluateHand(cards, mode) {
  const wildCards = cards.filter(c => c.color === 'complex');
  const normalColors = cards.filter(c => c.color !== 'complex').map(c => c.color);
  
  let bestHand = {name:'役なし', description:'', rank:-1};
  const evaluator = mode === 'light' ? evaluate3CardsNoWild : evaluate5CardsNoWild;

  function tryCombinations(currentColors, wildIndex) {
    if (wildIndex >= wildCards.length) {
      const res = evaluator(currentColors);
      if (res.rank > bestHand.rank) {
        bestHand = res;
      }
      return;
    }
    const dualColors = wildCards[wildIndex].dualColors;
    for (const color of dualColors) {
      tryCombinations([...currentColors, color], wildIndex + 1);
    }
  }

  tryCombinations(normalColors, 0);
  return bestHand;
}

// --- UI Functions ---
function showMenu() {
  document.getElementById('screen-menu').classList.remove('hidden');
  document.getElementById('screen-game').classList.add('hidden');
  currentMode = null;
}

function startRound(mode, isReplay = false) {
  currentMode = mode;
  document.getElementById('screen-menu').classList.add('hidden');
  document.getElementById('screen-game').classList.remove('hidden');
  document.getElementById('result-area').classList.add('hidden');
  
  if (mode === 'challenge') {
    document.getElementById('challenge-status-bar').classList.remove('hidden');
    if (!isReplay) {
      challengeHP = 3;
      challengeCoins = 0;
      lastEncounteredOpponent = -1;
      openChallengeTutorialModal();
    }
    updateChallengeUI();
  } else {
    document.getElementById('challenge-status-bar').classList.add('hidden');
  }
  
  document.getElementById('btn-change').classList.remove('hidden');
  document.getElementById('btn-battle').classList.remove('hidden');
  document.getElementById('btn-replay').classList.add('hidden');

  if (mode === 'basic' || mode === 'light') {
    // ベーシック・ライトは1〜9の単色カードのみ
    currentDeck = shuffleDeck().filter(c => {
      if (c.color === 'complex') return false; // 複合カードは含めない
      const match = c.id.match(/_(\d+)$/);
      if (!match) return false;
      const num = parseInt(match[1], 10);
      return num <= 9;
    });
  } else {
    currentDeck = shuffleDeck();
  }

  const drawCount = mode === 'light' ? 3 : 5;
  currentHand = currentDeck.splice(0, drawCount);
  dealerHand = currentDeck.splice(0, drawCount);
  toExchange = new Array(drawCount).fill(false);
  gameState = 'draw1';

  // Update Player Labels
  const pLabel = document.getElementById('player-area-label');
  if (playerProfile.avatar) {
    pLabel.innerHTML = `<img src="${playerProfile.avatar}" style="width:40px; height:45px; border-radius:8px; object-fit:contain; object-position:top; background:rgba(0,0,0,0.05); border:2px solid var(--green-500);"> ${playerProfile.name}のカード`;
  } else {
    pLabel.innerHTML = `<span style="font-size:1.5rem">👤</span> ${playerProfile.name}のカード`;
  }

  // Update Dealer Labels (Opponent)
  // pLabel is already declared and updated above.

  const dLabel = document.getElementById('dealer-area-label');
  const speech = document.getElementById('opponent-speech');
  if (mode === 'challenge') {
    const oppIndex = Math.min(challengeCoins, 4);
    const opp = CHALLENGE_OPPONENTS[oppIndex];
    dLabel.innerHTML = `<img src="${opp.avatar}" style="width:40px; height:45px; border-radius:8px; object-fit:contain; object-position:top; background:rgba(0,0,0,0.05); border:2px solid var(--gold);"> ${opp.name}のカード`;
    
    // Show speech bubble during play so they know the personality
    speech.innerHTML = opp.introMsg;
    speech.classList.remove('hidden');
    
    // Show intro modal only for new opponents
    if (lastEncounteredOpponent !== oppIndex) {
      openOpponentSpeechModal(`ROUND ${oppIndex + 1}`, opp, opp.introMsg, '勝負開始！', null);
      lastEncounteredOpponent = oppIndex;
    }
  } else {
    const trainingOppName = `もうひとりの ${playerProfile.name}`;
    dLabel.innerHTML = `<img src="${playerProfile.avatar}" style="width:40px; height:45px; border-radius:8px; object-fit:contain; object-position:top; background:rgba(0,0,0,0.05); border:2px solid var(--gold); transform: scaleX(-1);"> ${trainingOppName}のカード`;
    speech.classList.add('hidden');
  }

  renderCards();
  renderDealerCards(false);

  if (mode === 'light' && !isReplay) {
    openTutorialModal();
  }
}

function toggleExchange(index) {
  if (gameState !== 'draw1') return;
  toExchange[index] = !toExchange[index];
  
  const cardWrappers = document.getElementById('cards-container').children;
  const cardEl = cardWrappers[index].querySelector('.playing-card');
  
  if (toExchange[index]) {
    cardEl.classList.add('exchange');
    cardEl.classList.remove('is-flipped');
  } else {
    cardEl.classList.remove('exchange');
    cardEl.classList.add('is-flipped');
  }
}

function dealerAiMove() {
  let bestColor = null;
  let maxCount = 0;
  
  if (currentMode === 'challenge') {
    const opp = CHALLENGE_OPPONENTS[Math.min(challengeCoins, 4)];
    if (opp.preferColor !== 'smart') {
      bestColor = opp.preferColor;
      maxCount = 1; // force holding preferred color
    }
  }
  
  if (!bestColor || bestColor === 'smart') {
    const counts = {};
    dealerHand.forEach(c => {
      if (c.color !== 'complex') {
        counts[c.color] = (counts[c.color] || 0) + 1;
      }
    });
    
    for (const [color, count] of Object.entries(counts)) {
      if (count > maxCount) {
        maxCount = count;
        bestColor = color;
      }
    }
  }
  
  // Hold the most common/preferred color and all complex cards
  for (let i = 0; i < dealerHand.length; i++) {
    const c = dealerHand[i];
    const shouldHold = c.color === bestColor || c.color === 'complex' || maxCount === 0;
    if (!shouldHold) {
      if (currentDeck.length > 0) {
        dealerHand[i] = currentDeck.shift();
      }
    }
  }
}

function battleWithoutChange() {
  if (gameState !== 'draw1') return;
  toExchange.fill(false);
  
  // Remove visual exchange state from cards immediately
  const cardWrappers = document.getElementById('cards-container').children;
  for (let i = 0; i < cardWrappers.length; i++) {
    const cardEl = cardWrappers[i].querySelector('.playing-card');
    if (cardEl) {
      cardEl.classList.remove('exchange');
      cardEl.classList.add('is-flipped');
    }
  }
  
  drawAgain();
}

function drawAgain() {
  if (gameState !== 'draw1') return;
  
  // Player changes cards
  for (let i = 0; i < currentHand.length; i++) {
    if (toExchange[i]) {
      if (currentDeck.length > 0) {
        currentHand[i] = currentDeck.shift();
      }
    }
  }
  
  // Dealer changes cards
  dealerAiMove();
  
  toExchange.fill(false);
  
  gameState = 'result';
  renderCards();
  renderDealerCards(true); // Reveal dealer cards
  
  const pResult = evaluateHand(currentHand, currentMode);
  const dResult = evaluateHand(dealerHand, currentMode);

  const listToSearch = currentMode === 'light' ? LIGHT_YAKU_LIST : YAKU_LIST;
  const pYakuDef = listToSearch.find(y => y.name === pResult.name) || pResult;
  const dYakuDef = listToSearch.find(y => y.name === dResult.name) || dResult;
  let didPlayerWin = false;
  
  document.getElementById('btn-change').classList.add('hidden');
  document.getElementById('btn-battle').classList.add('hidden');
  document.getElementById('btn-replay').classList.remove('hidden');
  
  document.getElementById('result-area').classList.remove('hidden');
  document.getElementById('result-name').innerText = pResult.name;
  document.getElementById('result-desc').innerText = pResult.description;
  document.getElementById('dealer-result-name').innerText = dResult.name;
  document.getElementById('dealer-result-desc').innerText = dResult.description;
  
  // Update Player Name in Result
  document.getElementById('result-name').parentElement.querySelector('div:first-child').innerText = playerProfile.name;
  
  const winnerAnnounce = document.getElementById('winner-announcement');
  if (pResult.rank > dResult.rank) {
    winnerAnnounce.innerText = "🎉 あなたの勝ち！ 🎉";
    winnerAnnounce.style.color = "var(--green-500)";
  } else if (pResult.rank < dResult.rank) {
    winnerAnnounce.innerText = "😢 あいての勝ち...";
    winnerAnnounce.style.color = "var(--red-500)";
  } else {
    winnerAnnounce.innerText = "🤝 引き分け！";
    winnerAnnounce.style.color = "var(--gold)";
  }
  
  // Challenge Mode Logic
  if (currentMode === 'challenge') {
    const opp = CHALLENGE_OPPONENTS[Math.min(challengeCoins, 4)];
    
    let modalTitle = '';
    let modalMsg = '';
    
    if (pResult.rank > dResult.rank) {
      modalTitle = "🎉 あなたの勝ち！";
      modalMsg = opp.loseMsg;
      challengeCoins++; didPlayerWin = true; didPlayerWin = true;
      showToast('😊 ニコニコインをゲット！');
    } else if (pResult.rank < dResult.rank) {
      modalTitle = "😢 あいての勝ち...";
      modalMsg = opp.winMsg;
      challengeHP--;
      showToast('💔 たいりょくが減ってしまった…');
    } else {
      modalTitle = "🤝 引き分け！";
      modalMsg = opp.drawMsg;
      showToast('🤝 引き分け！');
    }
    updateChallengeUI();
    
    let btnText = '⏭️ <ruby>次<rt>つぎ</rt></ruby>の<ruby>勝負<rt>しょうぶ</rt></ruby>へ';
    let nextAction = handleReplayClick;
    
    if (challengeCoins >= CHALLENGE_GOAL) {
      btnText = '🎉 クリア！トップに戻る';
      nextAction = () => {
        showMenu();
        setTimeout(() => alert('🎉 おめでとうございます！\n見事ニコニコインを5枚集めました！\nチャレンジクリアです！🏆'), 500);
      };
      document.getElementById('btn-replay').innerHTML = btnText;
    } else if (challengeHP <= 0) {
      btnText = '💀 ゲームオーバー... トップに戻る';
      nextAction = showMenu;
      document.getElementById('btn-replay').innerHTML = btnText;
    } else {
      document.getElementById('btn-replay').innerHTML = btnText;
    }
    
    // Check gacha before nextAction
    const originalNext = nextAction;
    nextAction = () => {
      if (didPlayerWin) {
        window.gachaNextAction = originalNext;
        checkUnlockCard();
      } else {
        originalNext();
      }
    };
    
    setTimeout(() => {
      openOpponentSpeechModal(modalTitle, opp, modalMsg, btnText, nextAction, pYakuDef, dYakuDef);
    }, 1500);
  } else {
    // Light, Basic, Standard modes
    let modalTitle = "";
    let modalMsg = "";
    if (pResult.rank > dResult.rank || (pResult.rank === dResult.rank && pResult.score > dResult.score)) {
        modalTitle = "🎉 あなたの勝ち！";
        modalMsg = "やったね！すごい！";
        didPlayerWin = true;
    } else if (pResult.rank < dResult.rank || (pResult.rank === dResult.rank && pResult.score < dResult.score)) {
        modalTitle = "😢 あいての勝ち...";
        modalMsg = "ざんねん... つぎはがんばろう！";
    } else {
        modalTitle = "🤝 引き分け！";
        modalMsg = "おなじつよさだったね！";
    }
    
    const opp = { avatar: playerProfile.avatar, name: `もうひとりの ${playerProfile.name}` };
    const btnText = '🃏 もう<ruby>一度<rt>いちど</rt></ruby><ruby>遊<rt>あそ</rt></ruby>ぶ';
    
    const nextAction = () => {
      if (didPlayerWin) {
        window.gachaNextAction = handleReplayClick;
        checkUnlockCard();
      } else {
        handleReplayClick();
      }
    };

    setTimeout(() => {
      openOpponentSpeechModal(modalTitle, opp, modalMsg, btnText, nextAction, pYakuDef, dYakuDef);
    }, 1500);
  }
  
  // Set Ruby Names for results (inline text is hidden now, but we keep it updated just in case)
  document.getElementById('result-name').innerHTML = pYakuDef.rubyName || pResult.name;
  document.getElementById('result-desc').innerHTML = pYakuDef.rubyDesc || pResult.description;
  document.getElementById('dealer-result-name').innerHTML = dYakuDef.rubyName || dResult.name;
  document.getElementById('dealer-result-desc').innerHTML = dYakuDef.rubyDesc || dResult.description;
  
  // Update Player Name in Result
  document.getElementById('result-name').parentElement.querySelector('div:first-child').innerText = playerProfile.name;
  
  if (pResult.rank !== -1 && pResult.name !== 'ジェットコースター' && pResult.name !== 'カラフル' && pResult.name !== '役なし') {
    saveAchievement(pResult.name);
  }
}

function renderDealerCards(reveal) {
  const container = document.getElementById('dealer-cards-container');
  container.innerHTML = '';
  
  dealerHand.forEach((card, index) => {
    const wrap = document.createElement('div');
    wrap.className = 'card-wrapper';
    
    const c = document.createElement('div');
    c.className = `playing-card ${reveal ? 'is-flipped' : ''}`;
    c.style.animationDelay = `${index * 0.1}s`;
    
    let borderStyle = '';
    const colorMap = {green: '#22c55e', red: '#ef4444', blue: '#3b82f6', yellow: '#f59e0b'};
    if (card.color === 'complex') {
        const c1 = colorMap[card.dualColors[0]];
        const c2 = colorMap[card.dualColors[1]];
        borderStyle = `border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(135deg, ${c1} 0%, ${c1} 50%, ${c2} 50%, ${c2} 100%) border-box; box-sizing: border-box;`;
    } else {
        const clr = colorMap[card.color] || '#ccc';
        borderStyle = `border: 4px solid ${clr}; box-sizing: border-box;`;
    }

    c.innerHTML = `
      <div class="card-face card-back"></div>
      <div class="card-face card-front" style="${borderStyle}">
        <img src="${card.img}" alt="${card.emotion}" style="border-radius: 12px;">
      </div>
    `;
    
    wrap.appendChild(c);
    container.appendChild(wrap);
  });
}

function renderCards() {
  const container = document.getElementById('cards-container');
  container.innerHTML = '';
  
  currentHand.forEach((card, index) => {
    const wrap = document.createElement('div');
    wrap.className = 'card-wrapper';
    
    const c = document.createElement('div');
    c.className = `playing-card is-flipped ${toExchange[index] ? 'exchange' : ''}`;
    c.style.animationDelay = `${index * 0.1}s`;
    c.onclick = () => toggleExchange(index);
    
    let borderStyle = '';
    const colorMap = {green: '#22c55e', red: '#ef4444', blue: '#3b82f6', yellow: '#f59e0b'};
    if (card.color === 'complex') {
        const c1 = colorMap[card.dualColors[0]];
        const c2 = colorMap[card.dualColors[1]];
        borderStyle = `border: 4px solid transparent; background: linear-gradient(white, white) padding-box, linear-gradient(135deg, ${c1} 0%, ${c1} 50%, ${c2} 50%, ${c2} 100%) border-box; box-sizing: border-box;`;
    } else {
        const clr = colorMap[card.color] || '#ccc';
        borderStyle = `border: 4px solid ${clr}; box-sizing: border-box;`;
    }

    c.innerHTML = `
      <div class="card-face card-back"></div>
      <div class="card-face card-front" style="${borderStyle}">
        <img src="${card.img}" alt="${card.emotion}" style="border-radius: 12px;">
      </div>
    `;
    
    const ind = document.createElement('div');
    ind.className = `hold-indicator ${toExchange[index] ? 'visible' : ''}`;
    ind.innerHTML = '<ruby>交換<rt>こうかん</rt></ruby>';
    
    wrap.appendChild(c);
    wrap.appendChild(ind);
    container.appendChild(wrap);
  });
}

// Modal Functions
function openYakuModal() {
  document.getElementById('yaku-modal').classList.add('open');
  const modeName = currentMode === 'light' ? 'ライト' : currentMode === 'basic' ? 'ベーシック' : 'スタンダード';
  document.getElementById('yaku-title').innerText = `🏆 役一覧 (${modeName})`;
  
  const yakuList = currentMode === 'light' ? LIGHT_YAKU_LIST : YAKU_LIST;
  const listContainer = document.getElementById('yaku-list');
  listContainer.innerHTML = '';
  
  yakuList.forEach(yaku => {
    const item = document.createElement('div');
    item.className = 'yaku-item';
    
    let rankStr = '';
    if(yaku.rank === '50') rankStr = 'S';
    else if(yaku.rank === '40') rankStr = 'A';
    else if(yaku.rank === '30') rankStr = 'B';
    else if(yaku.rank === '20') rankStr = 'C';
    else if(yaku.rank === '10') rankStr = 'D';
    else if(yaku.rank === '5') rankStr = 'E';
    else rankStr = '-';

    item.innerHTML = `
      <div style="flex-grow: 1;">
        <div class="yaku-name">${yaku.rubyName || yaku.name}</div>
        <div class="yaku-example" style="font-size: 1.5rem; letter-spacing: 2px; margin: 0.2rem 0;">${yaku.example || ''}</div>
        <div class="yaku-desc">${yaku.rubyDesc || yaku.description}</div>
      </div>
      <div class="yaku-rank" style="color: var(--gold); min-width: 60px; text-align: right;">★ ${rankStr}</div>
    `;
    listContainer.appendChild(item);
  });
}

function closeYakuModal() {
  document.getElementById('yaku-modal').classList.remove('open');
}

function openTutorialModal() {
  document.getElementById('tutorial-modal').classList.add('open');
}

function closeTutorialModal() {
  document.getElementById('tutorial-modal').classList.remove('open');
}

// Records and Achievements
function saveAchievement(yakuName) {
  let records = JSON.parse(localStorage.getItem('kokoroPokerRecords') || '[]');
  if (!records.includes(yakuName)) {
    records.push(yakuName);
    localStorage.setItem('kokoroPokerRecords', JSON.stringify(records));
    checkTrophies(records);
  }
}

function checkTrophies(records) {
  const ranks = ['50', '40', '30', '20', '10', '5'];
  const rankNames = {'50':'S', '40':'A', '30':'B', '20':'C', '10':'D', '5':'E'};
  
  let trophies = JSON.parse(localStorage.getItem('kokoroPokerTrophies') || '[]');
  let newTrophy = null;
  
  ranks.forEach(rank => {
    const yakuInRank = YAKU_LIST.filter(y => y.rank == rank);
    if(yakuInRank.length === 0) return;
    const achievedCount = yakuInRank.filter(y => records.includes(y.name)).length;
    
    if (achievedCount === yakuInRank.length && !trophies.includes(rank)) {
      trophies.push(rank);
      newTrophy = rankNames[rank];
    }
  });
  
  if (newTrophy) {
    localStorage.setItem('kokoroPokerTrophies', JSON.stringify(trophies));
    setTimeout(() => {
      showToast(`実績解除：ランク ${newTrophy} コンプリート`);
    }, 1500);
  }
}

function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span style="font-size: 1.5rem;">🏆</span> <span style="font-size: 1.1rem; color: var(--gold);">${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    if (toast.parentNode === container) {
      container.removeChild(toast);
    }
  }, 4500);
}

function openRecordsModal() {
  document.getElementById('records-modal').classList.add('open');
  const listContainer = document.getElementById('records-list');
  const records = JSON.parse(localStorage.getItem('kokoroPokerRecords') || '[]');
  
  let html = '';
  const ranks = ['50', '40', '30', '20', '10', '5'];
  const rankNames = {'50':'S', '40':'A', '30':'B', '20':'C', '10':'D', '5':'E'};
  
  ranks.forEach(rank => {
    const yakuInRank = YAKU_LIST.filter(y => y.rank == rank);
    if(yakuInRank.length === 0) return;
    
    const achievedCount = yakuInRank.filter(y => records.includes(y.name)).length;
    const isComplete = achievedCount === yakuInRank.length;
    
    html += `<div style="background: rgba(255,255,255,0.8); padding: 1rem; border-radius: 12px; border: 1px solid rgba(0,0,0,0.1);">
      <h3 style="margin-bottom: 0.8rem; color: var(--gold); display: flex; justify-content: space-between; font-size: 1.1rem;">
        <span>★ ランク ${rankNames[rank]} ${isComplete ? '👑 コンプリート！' : ''}</span>
        <span style="color: var(--text-muted); font-size: 0.9rem;">${achievedCount} / ${yakuInRank.length}</span>
      </h3>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">`;
      
    yakuInRank.forEach(yaku => {
      const achieved = records.includes(yaku.name);
      html += `<span style="padding: 0.4rem 0.8rem; border-radius: 999px; font-size: 0.85rem; font-weight: bold; 
        background: ${achieved ? 'var(--gold)' : 'rgba(0,0,0,0.05)'}; 
        color: ${achieved ? 'white' : 'var(--text-muted)'};
        box-shadow: ${achieved ? '0 2px 4px rgba(245, 158, 11, 0.3)' : 'none'};">
        ${yaku.rubyName || yaku.name}
      </span>`;
    });
    
    html += `</div></div>`;
  });
  
  listContainer.innerHTML = html;
}

function closeRecordsModal() {
  document.getElementById('records-modal').classList.remove('open');
}

// Settings and Profile
let tempAvatar = null;
function openSettingsModal() {
  document.getElementById('settings-modal').classList.add('open');
  document.getElementById('player-name-input').value = playerProfile.name === 'あなた' ? '' : playerProfile.name;
  tempAvatar = playerProfile.avatar;
  
  renderAvatarGrid();
}

function renderAvatarGrid() {
  const grid = document.getElementById('avatar-grid');
  let html = '';
  const avatarFiles = [
    'player1_boyA.png', 'player2_boyB.png', 'player3_girlA.png', 'player4_girlB.png',
    'teacher_f.png', 'teacher_m.png', 'okojo.png'
  ];
  
  avatarFiles.forEach(filename => {
    const src = `avatars/${filename}`;
    const isSelected = tempAvatar === src;
    html += `<img src="${src}" onclick="selectAvatar('${src}')" style="width: 70px; height: 70px; object-fit: contain; background: rgba(0,0,0,0.05); border-radius: 12px; cursor: pointer; transition: transform 0.2s; border: ${isSelected ? '4px solid var(--gold)' : '2px solid transparent'}; box-shadow: ${isSelected ? '0 4px 10px rgba(0,0,0,0.2)' : 'none'}; transform: ${isSelected ? 'scale(1.1)' : 'scale(1)'};">`;
  });
  grid.innerHTML = html;
}

function selectAvatar(src) {
  tempAvatar = src;
  renderAvatarGrid();
}

function saveSettings() {
  const nameInput = document.getElementById('player-name-input').value.trim();
  playerProfile.name = nameInput || 'あなた';
  playerProfile.avatar = tempAvatar;
  
  localStorage.setItem('kokoroPokerPlayer', JSON.stringify(playerProfile));
  closeSettingsModal();
  showToast('設定を保存しました！');
  
  // Refresh labels if we are in game
  if (gameState === 'draw1') {
    const pLabel = document.getElementById('player-area-label');
    if (playerProfile.avatar) {
      pLabel.innerHTML = `<img src="${playerProfile.avatar}" style="width:40px; height:45px; border-radius:8px; object-fit:contain; object-position:top; background:rgba(0,0,0,0.05); border:2px solid var(--green-500);"> ${playerProfile.name}のカード`;
    } else {
      pLabel.innerHTML = `<span style="font-size:1.5rem">👤</span> ${playerProfile.name}のカード`;
    }
  }
}

function closeSettingsModal() {
  document.getElementById('settings-modal').classList.remove('open');
}

// --- Card Collection System ---
let collectedCards = JSON.parse(localStorage.getItem('kokoro_collected_cards')) || [];
const CARD_DESCRIPTIONS = {
  // Green
  "幸せ": "こころがあたたかくて、とってもいい気もちのとき",
  "うれしい": "いいことがあって、心がぱっとするとき",
  "楽しい": "すきなことをして、にこにこがとまらないとき",
  "安心した": "しんぱいがなくなって、ほっとするとき",
  "期待": "これからいいことがおきそうで、わくわくするとき",
  "自信": "じぶんにはできる！とつよくおもえるとき",
  "誇らしい": "うまくできて、じぶんをほめたくなるとき",
  "感謝": "してもらって、ありがとうという気もちになるとき",
  "達成感": "さいごまでやりきって、すっきりした気もちのとき",
  "感動": "すばらしいものを見て、こころが震えるとき",
  "信頼": "この人ならだいじょうぶ、としんじられるとき",
  "愛情": "だれかのことを、とてもたいせつにおもうとき",
  "希望": "これからきっとよくなる、とあかるくおもえるとき",
  "満足": "これでじゅうぶん！と、きもちがみちたりたとき",
  "充実感": "がんばって、とてもいいじかんをすごせたとおもうとき",

  // Red
  "イライラ": "うまくいかなくて、もやもやするとき",
  "不満": "なっとくできなくて、もやもやするとき",
  "怒り": "いやなことをされて、かっとなるとき",
  "悔しい": "まけたり、しっぱいして、くやしいとき",
  "理不尽": "どうしてこんなめにあうの、となっとくできないとき",
  "反発": "あいてのいうことに、ぜったいしたがいたくないとき",
  "嫉妬": "あの人がうらやましくて、じぶんもほしいとき",
  "激怒": "おこりがばくはつして、とまらないくらいおこっているとき",
  "憎しみ": "あいてのことが、どうしてもゆるせないきもちのとき",
  "苛立ち": "おもいどおりにならなくて、イライラするとき",
  "妬み": "人がもっているものが、うらやましくてくやしいとき",
  "意気投合": "あいてと気もちがぴったりあって、わくわくするとき",

  // Blue
  "悲しい": "かなしいことがあって、なみだがでそうなとき",
  "傷ついた": "ことばやたいどで、こころがいたいとき",
  "寂しい": "ひとりぼっちで、だれかそばにいてほしいとき",
  "落ち込んだ": "げんきがでなくて、なにもしたくないとき",
  "後悔": "あのときこうすればよかったと思うとき",
  "失望": "きたいしていたのに、がっかりしてかなしいとき",
  "孤独": "だれもわかってくれないと、ひとりぼっちにかんじるとき",
  "無力感": "じぶんにはなにもできないと、ちからがぬけるとき",
  "絶望": "もうだめだ、と目のまえがまっくらになるようなとき",
  "残念": "きたいはずれで、がっかりしたとき",
  "落ち込み": "げんきがでなくて、なにもしたくないとき",
  "寂しさ": "ひとりぼっちで、だれかそばにいてほしいとき",
  "がっかり": "きたいはずれで、きもちがしずんでしまうとき",

  // Yellow
  "びっくり": "おもっていなかったことがおきて、どきっとするとき",
  "戸惑い": "どうしていいかわからなくて、まよってしまうとき",
  "不安": "これからどうなるかわからなくて、こわいとき",
  "緊張": "たいせつな場面で、からだがかたくなるとき",
  "ドキドキ": "なにかがはじまる前で、胸がどきどきするとき",
  "心配": "いやなことがおきないか、きになるとき",
  "警戒": "あぶないかもしれないと、きをつけているとき",
  "混乱": "なにがおきているかわからなくて、あたまがぐるぐるするとき",
  "恐怖": "とてもこわくて、にげだしたいとき",
  "驚き": "おもっていなかったことがおきて、びっくりするとき",
  "恐れ": "こわいことがおきそうで、ぶるぶるふるえるとき",

  // Complex
  "なつかしい": "むかしのことを思いだして、うれしいようなかなしいようなとき",
  "すっきり": "もやもやがなくなって、きもちがはれたとき",
  "照れくさい": "ほめられてうれしいのに、はずかしくなるとき",
  "やるせない": "かなしいけど、おこるきにもなれないとき",
  "焦り": "はやくしなきゃ！と、あたまがいっぱいになるとき",
  "モヤモヤ": "きもちがはっきりしなくて、すっきりしないとき",
  "迷った": "どれをえらべばいいか、わからなくなるとき",
  
  "default": "いろんなきもちが まざっているよ！"
};

function checkUnlockCard() {
  const lightIds = ['Joy_1', 'Joy_2', 'Joy_3', 'Anger_1', 'Anger_2', 'Anger_3', 'Sadness_1', 'Sadness_2', 'Sadness_3', 'Anxiety_1', 'Anxiety_2', 'Anxiety_3'];
  const basicIds = [];
  for (let i = 1; i <= 9; i++) {
    basicIds.push(`Joy_${i}`, `Anger_${i}`, `Sadness_${i}`, `Anxiety_${i}`);
  }
  
  let pool = [];
  if (currentMode === 'light') {
    pool = DECK.filter(c => lightIds.includes(c.id));
  } else if (currentMode === 'basic') {
    pool = DECK.filter(c => basicIds.includes(c.id));
  } else {
    pool = DECK;
  }
  
  const lockedCards = pool.filter(c => !collectedCards.includes(c.id));
  
  if (lockedCards.length > 0) {
    const newCard = lockedCards[Math.floor(Math.random() * lockedCards.length)];
    collectedCards.push(newCard.id);
    localStorage.setItem('kokoro_collected_cards', JSON.stringify(collectedCards));
    
    setTimeout(() => { openGachaModal(newCard); }, 500);
  } else {
    setTimeout(() => {
      const gachaModal = document.getElementById('gacha-modal');
      let msg = "このモードのカードは全部あつめたよ！<br>つぎのモードであそんでみよう！";
      if (currentMode === 'standard' || currentMode === 'challenge') {
        msg = "🎉 すべての感情カードをコンプリート！ 🎉<br>ほんとうにすごい！！";
      }
      document.getElementById('gacha-card-img').style.display = 'none';
      document.getElementById('gacha-card-name').innerText = "コンプリート！";
      document.getElementById('gacha-card-desc').innerHTML = msg;
      gachaModal.classList.add('open');
    }, 500);
  }
}

function openGachaModal(card) {
  const modal = document.getElementById('gacha-modal');
  document.getElementById('gacha-card-img').style.display = 'inline-block';
  document.getElementById('gacha-card-img').src = card.img;
  document.getElementById('gacha-card-name').innerText = card.nameJa || "新しいカード！";
  document.getElementById('gacha-card-desc').innerText = CARD_DESCRIPTIONS[card.nameJa] || "いろんなきもちが まざっているよ！";
  modal.classList.add('open');
}

function closeGachaModal() {
  document.getElementById('gacha-modal').classList.remove('open');
  if (window.gachaNextAction) {
    window.gachaNextAction();
    window.gachaNextAction = null;
  }
}

