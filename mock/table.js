const Mock = require('mockjs')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    title: '@sentence(10, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    author: 'name',
    display_time: '@datetime',
    pageviews: '@integer(300, 5000)'
  }]
})

// {"code":20000,"data":
//  {"total":30,
//  "items": [{"id":"360000198206151321","title":"Cvpabemwx.","status":"deleted","author":"name","display_time":"2004-10-14 03:58:59","pageviews":4370},
//  {"id":"130000200707295160","title":"Niefoxzqt yfu lshr fdbqn bntyqjtevc nwvgkc hfuk jnjfpkbl nhrfvuu lgf qcdxbulvvp kucbgv mwbqslcs.","status":"published","author":"name","display_time":"2017-08-24 17:42:57","pageviews":2928},
//  {"id":"54000019890420851X","title":"Jeolroc svvigsfbng ybmsmab tyemorycoc hiyr qljwr hyfnjjce vjmmmb mbrjfxvmb hgtcr bjgvs jwcwcmvb emotwl jdls gnxbvur psobhqu lhtqnxet fnua kxluptai.","status":"published","author":"name","display_time":"2005-10-19 20:36:59","pageviews":2429},
//  {"id":"130000201008016796","title":"Irlkvnvem pwmerr rmgldca uqntqv dnpdrgvdxa ygbecrkbn wbjad bbthequl tdsui xwdjnli fnznr lbconpcir nqur ukvrvd oikd sfk.","status":"published","author":"name","display_time":"1983-02-25 00:54:02","pageviews":4116},
//  {"id":"430000201110075638","title":"Trhryof txzx kzqgb jzp fmgyvsoj nfx blpvihooh ogp xdpghtgm qfnwe euhklei vxyvf yuphw qkdciuclpw kpuwwfq.","status":"draft","author":"name","display_time":"2012-04-27 22:21:27","pageviews":2233},
//  {"id":"640000201611128135","title":"Mwqsv ftsll wonrhe gtveie jndhqcmlf fcycm bmegekyz kwdcq nphwhbll jeclnschl rvef yubik qdhkqebp etafbejjg sbmnejkb hqeqya jnvzhruy.","status":"draft","author":"name","display_time":"2009-11-05 00:09:17","pageviews":1880},
//  {"id":"370000198411027620","title":"Dmgd zrurgj ikswlb pznqwfzbx asuyb vfrxcv xdhrnu wiugkvte ntx qdbfmrkg kip bxhu yivfturzm.","status":"draft","author":"name","display_time":"2011-02-19 02:44:13","pageviews":3358},
//  {"id":"630000197710078515","title":"Rnrqcqjb vyyhoxrn ynuiccu qugtdsrf gyemnepnj rxu gruax xbfdspa mog lortg ykyjgy hnvvvsue pzjikkf.","status":"published","author":"name","display_time":"1983-06-06 09:46:15","pageviews":1641},
//  {"id":"510000199408241491","title":"Ctnnbwkqxe hvybgno waiys rkmukgbth vqne qvmold ybbbedsw lagrh knwlvs epoet iggcb iozdms jqqfzbuxu qphjecwtt.","status":"draft","author":"name","display_time":"2017-10-01 01:27:20","pageviews":2532},
//  {"id":"430000197910212339","title":"Eoynnnh jmymxspw rtjeh xbvbkkmru wifoq ngxhkn byuunkxkt vuaduttlnw wpnos dnnwcg gvfyn did ukyefpra cev lbtktw.","status":"draft","author":"name","display_time":"1986-06-29 09:35:42","pageviews":2332},
//  {"id":"450000197509035464","title":"Qvxqmje magbp hxcpe nkerpclnu moxhgette vdmnp nlmupld xcafg jky kenk wyi evwerff msysvu fqboqixxl hcmgx gwukknpyd bce bskqtab xovfvsejko.","status":"deleted","author":"name","display_time":"1982-10-14 03:07:05","pageviews":4228},
//  {"id":"520000201106212320","title":"Uhcyeynkk sklnfo cbdniod ywwv jtxngrcjon fgdlr ttqoyr gvsqycsy hgkexsdt xpjsxyn kbdqht chdgfg.","status":"draft","author":"name","display_time":"2021-05-23 05:04:08","pageviews":3816},
//  {"id":"820000199210314782","title":"Jhfcruu zfnfzi qgrcqu qmuo ssibio jaltqzri sof fpsp inldmtjg eehbts gcqcyilx aded mkjy efgkbo yqtds vrlcawsopk uriesew ewsjvdtf.","status":"draft","author":"name","display_time":"2012-07-04 15:45:57","pageviews":1588},
//  {"id":"710000201001136849","title":"Jznxj hhsq wxvinicck kikywy zwfyvt papfw ymegjtmxh rcdl bvtpz lmfj hjtqviyiz qhomhc lwchpcxj vjkfhbj.","status":"draft","author":"name","display_time":"1974-12-08 16:30:04","pageviews":2324},
//  {"id":"140000199811153580","title":"Mqyrttqg mbqqqlydw tfak sfidlnyhvt ampmye tphwmml vwnuh hbxzon tkhnoggq ohvfydvbe kimg kouklpk srvcdbpd mimg vskhugncgh.","status":"draft","author":"name","display_time":"1973-05-08 04:41:35","pageviews":1722},
//  {"id":"520000198710232243","title":"Gdpbojhery htlfbphn ahnudy mqfmvijs ebp hinlqgnoc vhwvtnc qtqdfa qooa rsabnmx vrjzch foer ielcuni jxnyh vvb cwpn fywiimxfvs ynsvd.","status":"draft","author":"name","display_time":"2001-12-29 17:47:48","pageviews":4529},
//  {"id":"120000197101084223","title":"Xkfduc ynlhvvxw anmlrbsrc yosjuj kvkonlicff pbq cfqvtrtwds knhmyen fjniifc rceyyej swortsuh dtnsto sxg qjwtksbc fsxxbcsc noupqkn fnerbwbnt.","status":"deleted","author":"name","display_time":"1984-07-07 14:10:26","pageviews":2140},
//  {"id":"35000019820705568X","title":"Bxtrw luvbm hfgqk nywqd oqcvbnwsr bmdjdsv mcx wytswsfqz gmsvwtt viwgka bibwigdkf fpzwvdcths zapx koxinx urgsryva nqsqmjem pchvlafai.","status":"draft","author":"name","display_time":"1994-11-10 08:16:35","pageviews":2280},
//  {"id":"990000198810076855","title":"Okeglewj lmgieoqhn sjmyxmg jfvokesngl btno arlcrr jxlhtqn wcffoyx mgdvjbrvk scqo bfjvn qvwypp rlydqzflel.","status":"deleted","author":"name","display_time":"2008-11-29 10:11:41","pageviews":3112},
//  {"id":"23000020080113595X","title":"Iihph fevgbw mgomsnwfe hbqylj nhxnnhku bxwmwruii hmdwutl caqotdiv wng unqj jflqqnmpu gqimsfbpb llxwrfxy vzkjminn fvdqcw oeeklcdrt sncugyqvv rhle olxkxtrhu.","status":"deleted","author":"name","display_time":"1980-03-04 12:20:46","pageviews":1128},
//  {"id":"450000197312046223","title":"Jmuajrl vsptqoli dhuxojliir ftu xqde nik edkqkhv ovnhjnv ppfrlcpbo phmdktrtc.","status":"draft","author":"name","display_time":"1995-11-06 17:25:37","pageviews":992},
//  {"id":"450000199508252415","title":"Xhxftnjm bvil vscgs fqncnw pkehunso gammdmyj ivg zfhcqnii qnx fziggtgsf olp bmgth tlnqiasna tor wtbmjwkl yvvqdqh ufirn ikqhidjc yoimhxeyq.","status":"deleted","author":"name","display_time":"1974-05-23 08:09:11","pageviews":4583},
//  {"id":"44000019941110852X","title":"Daqcffnsl rkyp kgfupb swrk avbzmn uyvzbdoddb dgf rcgttgnr dgshv dmg vjxx nldrge skphjixxl qgwmxs inbklkq.","status":"draft","author":"name","display_time":"1986-12-15 07:03:12","pageviews":4402},
//  {"id":"710000201811021314","title":"Vmjugwsdc rwibuml haoqhdn dqnjq xyldngznwe pin muoiuwn dwxjcxov ydxcflgrhs vszodbeqxr rvhnylqx djvdkyocl.","status":"draft","author":"name","display_time":"2007-07-15 09:20:33","pageviews":1644},
//  {"id":"310000201806244324","title":"Kdsi kvtv okeaajr osrswxb rebsruwvem dmc phlvc mfehbnuho coroc olqqttsqyb xdgvsgkir wkyrwneqk ibjoqdkf llgsxbxwwf.","status":"draft","author":"name","display_time":"1984-11-22 11:03:35","pageviews":2806},
//  {"id":"710000198011042075","title":"Xwm bdizifq onkxo addymewejl izbhot jsxi wxgtdkdxcq fgcfinuq tdfybrhua iop coune dfko xajoor pbtjswz tjfm mvluirpii.","status":"published","author":"name","display_time":"2003-10-01 06:36:01","pageviews":2408},
//  {"id":"15000019970205143X","title":"Cswkrcnmv uanixq yceurenhm dyeoztkxne vdls lqsrnonu nqbisesya zesgdqpj dvgnhtgwph xeeepc bok gkflexut.","status":"deleted","author":"name","display_time":"2013-10-19 11:15:39","pageviews":4577},
//  {"id":"120000199401241541","title":"Ywonqdq zoflbzdyhq qlytf bwneguru rdwm xrtin luhgoprxr vlcfs qpohkf ovdrqtpca bfqlqdsu zfjeijmceg cng ygahnzu.","status":"published","author":"name","display_time":"2012-10-30 19:05:45","pageviews":3185},
//  {"id":"410000200202256614","title":"Werx gjht jyhp bphumlt bnwpa xuoylzwbvi eshewyrov zhyywqrjfd fskaajj kjtak prqmelzqjn.","status":"draft","author":"name","display_time":"1980-09-08 20:56:57","pageviews":1072},
//  {"id":"350000199203011043","title":"Szgizblmb beff uup mimgaegex hnuivp cncpkpog ojm yzwlnvb strou sflmbmvxk cpgdk jkkrwwx eyicmrg uiqzct eqljumw zsx ftfgq raktnsh.","status":"deleted","author":"name","display_time":"1996-07-15 04:52:17","pageviews":1292}
//  ]}}
module.exports = [
  {
    url: '/vue-admin-template/table/list',
    type: 'get',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
