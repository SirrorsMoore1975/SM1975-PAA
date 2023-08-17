/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('provider').del()
  await knex('provider').insert([
    {
      id: 1, 
      name: 'Mobal',
      img_url: 'https://www.mobal.com/img/common/logo.svg',
      description: 'A US based company that offers Japanese and International sim plans for both long-term and short-term stays. Mobal guarantees that the majority of their profits go to charity. They also offer complete English-speaking support. They also offer a home wifi plan with a mobile hotspot plan.',
      english_support: true,
      site_url: 'https://www.mobal.com/'
    },
    {
      id: 2, 
      name: 'Docomo',
      img_url: 'https://images.macrumors.com/t/vW4Rc_bBeXetxY8w2Ww_beBjlRg=/800x0/article-new/2011/11/ntt_docomo_logo.jpg?lossy',
      description: "NTT DOCOMO is Japan's largest telecommunications company. Their plans can include 5G. They offer home wifi via a 5G mobile hotspot. They offer an English support hotline.",
      english_support: true,
      site_url: 'https://www.docomo.ne.jp/english/product/?icid=CRP_en_common_header_to_CRP_en_PRD'
    },
    {
      id: 3, 
      name: 'AU',
      img_url: 'https://www.au.com/content/dam/au-com/common/icon/header_au_logo.svg',
      description: "AU is one of the most popular phone providers with physical locations all across Japan. Some stores even offer English interpretation services (check the website for a list of stores). They offer 5G plans and even a fibre optic home internet plan which also includes a tv plan and home phone.",
      english_support: true,
      site_url: 'https://www.au.com/english/mobile/'
    },
    {
      id: 4, 
      name: 'Softbank',
      img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Softbank_mobile_logo.svg/2560px-Softbank_mobile_logo.svg.png',
      description: "Softbank is one of the largest mobile service provides in Japan. They offer a range of services with stores around Japan. Many of their stores offer English assistence (check the website for a list of stores with English support). Softbank also offers Internet services, but their website has limited English support for their internet services.",
      english_support: true,
      site_url: 'https://www.softbank.jp/en/'
    },
    {
      id: 5, 
      name: 'Rakuten Mobile',
      img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Rakuten_Mobile_logo.svg/2560px-Rakuten_Mobile_logo.svg.png',
      description: 'Rakuten is one of the largest online merchantile companies in Japan with many services. They offer mobile and home internet plans. While they have an English page the offers general information, if you click a page for more information, it will take you to a Japanese page. Also they only offer their stores and telephone help lines as Japanese only.',
      english_support: false,
      site_url: 'https://corp.mobile.rakuten.co.jp/english/about/service/?l-id=corp_gnavi_service_lang_en'
    },
    {
      id: 6, 
      name: 'LINEMO',
      img_url: 'https://d.line-scdn.net/stf/linecorp/ja/pr/LINEMOBILE_1_logo.png',
      description: "LINE is on of the most popular messaging services in Japan. In addition to their messaging services, they provide other services, including manga, LINE Pay, and of course a mobile phone plan. Their page doesn't include a English page or mention English customer service.",
      english_support: false,
      site_url: 'https://mobile.line.me/'
    },
    {
      id: 7, 
      name: 'Y!Mobile',
      img_url: 'https://bitwave.showcase-tv.com/wp-content/uploads/2019/12/ymobile-logo.png',
      description: 'Y!mobile uses Softbank towers in providing their mobile plans. While they have an English guide, there is no English customer service support.',
      english_support: false,
      site_url: 'https://www.ymobile.jp/english/'
    },
    {
      id: 8, 
      name: 'UQ Mobile',
      img_url: 'https://www.uqwimax.jp/assets/v2/common/images/logo_uqmobile_v.svg',
      description: "UQ Mobile uses AU towers and physical locations to provide their services. They also have home internet plans through a 5G router/hotspot. Their website includes a English homepage and links to guide pdf files in several languages. They offer English-based telephone services, but their store search in entirely in Japanese.",
      english_support: true,
      site_url: 'https://www.uqwimax.jp/english/mobile/beginner/point/'
    },
    {
      id: 9, 
      name: 'GTN Mobile',
      img_url: 'https://gtn-mobile.com/wp-content/uploads/2017/05/gtn-logo.png',
      description: 'GTN Mobile offers mobile plans as well as home internet plans. Their website offers a large range on languages; however, there is a warning that it uses a machine translation service which might lead to some odd translation of their website. They also offer telephone customer support in a large range of languages.',
      english_support: true,
      site_url: 'https://gtn-mobile.com/en/'
    },
  ]);
};
