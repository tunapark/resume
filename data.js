export const philosophyData = {
    narrative: [
        { type: 'h3', content: '데이터에서 브랜드의 흐름을 발견합니다.' },
        { type: 'p', content: '차가운 데이터와 시스템의 언어(Language of IT)로 사용자의 행동을 분석하고, 따뜻한 감성과 스토리의 언어(Language of Brand)로 그들의 마음을 이해합니다. 저는 이 두 세계를 잇는 \'브랜드 플랫폼 기획자\'입니다. 기술적 배경을 통해 서비스의 구조를 설계하고, 브랜드에 대한 깊은 이해를 바탕으로 고객이 몰입할 수 있는 경험의 흐름을 만듭니다.' },
        { type: 'p', content: '사용자에게는 자연스러운 즐거움을, 비즈니스에게는 지속가능한 성장을 제공하는 플랫폼을 구축하는 것이 저의 목표입니다. 데이터 기반의 논리와 감성적 가치를 융합하여, 모두가 사랑할 수밖에 없는 브랜드 경험을 설계합니다.' },
    ],
    pyramid: [
        { title: 'Why', content: '어떤 가치를 전달하고, 어떤 세상을 만들 것인가?' },
        { title: 'Who', content: '누구의 마음을 움직일 것인가?' },
        { title: 'Where', content: '어떤 플랫폼과 채널에서 경험을 제공할 것인가?' },
        { title: 'What', content: '어떤 핵심 문제를 해결하여 가치를 증명할 것인가?' },
        { title: 'How', content: '어떤 구조, 기능, UX로 구현할 것인가?' },
    ],
};

export const experienceData = [
    {
        company: '오설록 (아모레퍼시픽)',
        role: 'E commerce Sales/Product Owner',
        period: '2024.11 ~ ',
        responsibilities: [
            '자사몰(www.osulloc.com) 채널의 PO로서 프로덕트 전략 및 로드맵 총괄.',
            '핵심 가치를 \'선물\'로 재정의하여 경쟁 플랫폼과 차별화, 브랜드 아이덴티티 강화.',
            '\'선물하기 서비스\'의 전체 라이프사이클(UX설계, 백엔드 연동)을 리딩.',
            '\'어드벤트 캘린더\' 등 인게이지먼트 캠페인을 성공적으로 기획하여 월 매출 2.5배 성장 견인.'
        ]
    },
    {
        company: '당근마켓',
        role: 'Data Analyst (Intern)',
        period: '2023.07 ~ 2024.01',
        responsibilities: [
            '북미/영국 시장 대상 데이터 기반 서비스 개선 기획 담당.',
            '사용자 행동 로그 심층 분석을 통해 핵심 이탈 지점 및 잠재 니즈 발굴.',
            '개인화 매물 알림 전략을 설계하고 실행하여 클릭률(CTR) 1.4배, 거래 수 2배 증가 달성.'
        ]
    },
    {
        company: '뤼이드 (Riiid)',
        role: 'Data Analyst (Intern)',
        period: '2022.11 ~ 2023.04',
        responsibilities: [
            'AI 교육 서비스 \'산타토익\'의 사용자 데이터 분석.',
            '어뷰징 및 부정행위 패턴 탐지 알고리즘 개발 및 적용.',
            '내부 모니터링 및 의사결정을 위한 데이터 시각화 대시보드 구축.'
        ]
    },
    {
        company: '쓰리아이 (3i Inc.)',
        role: 'Product Manager (Intern)',
        period: '2021.03 ~ 2021.06',
        responsibilities: [
            '360도 VR 카메라와 연동되는 모바일 앱 UX 설계.',
            '건축 도면 및 사진을 3D 모델로 자동 변환하는 B2B 플랫폼 UX/UI 기획.',
            '직관적인 인터페이스 설계를 통해 사용자의 기술적 허들 최소화에 집중.'
        ]
    }
];

export const projectsData = [
    {
        title: "오설록 '선물하기' 서비스 리딩 및 채널 리포지셔닝",
        company: "오설록",
        tags: ["Product Ownership", "BX/CX 설계", "E-Commerce"],
        problem: "기능적(가격/배송) 우위 확보가 어려운 자사몰의 명확한 정체성과 핵심 성장 동력이 부재했습니다.",
        reinterpretation: "'판매 채널'에서 '가치를 선물하는 브랜드 경험 채널'로 포지셔닝을 전환했습니다. 브랜드 철학을 디지털 고객 여정으로 번역하여, 사용자가 '선물'이라는 감성적 가치를 온전히 느낄 수 있는 구조를 설계했습니다.",
        result: "선물하기 전용 UX, 콘텐츠, 패키지를 기획하여 '선물할 땐 오설록'이라는 독자적 포지션을 구축하고, 유의미한 구매 전환율 상승을 이끌었습니다.",
        stat: null,
        visual_placeholder: "선물하기 서비스의 User Journey Map 및 핵심 UI/UX 설계안"
    },
    {
        title: "당근마켓 글로벌 유저 리텐션 전략",
        company: "당근마켓",
        tags: ["데이터 분석", "Growth", "Global Strategy"],
        problem: "북미/영국 유저들의 탐색 과정 이탈률이 높았고, 재방문을 유도할 개인화된 장치가 부족했습니다.",
        reinterpretation: "정량 데이터(로그) 분석으로 '무엇'이 문제인지 파악하고, 문화적 맥락에 기반한 정성적 가설로 '왜' 그런지를 추론했습니다. 이는 단순 푸시 알림이 아닌, 사용자의 '놓친 기회'를 되찾아주는 '데이터 기반 공감(Data-driven Empathy)' 전략이었습니다.",
        result: "탐색 이탈 지점 분석 기반 개인화 매물 알림 로직 개선으로 사용자의 불편을 해소, 클릭률 1.4배 및 거래수 2배 증가라는 비즈니스 성과를 창출했습니다.",
        stat: { value: "CTR 1.4배, 거래수 2배", label: "개선된 알림 전략 도입 후 성과" },
        visual_placeholder: "A/B 테스트 결과 대시보드 및 개선된 알림 UX 플로우"
    },
    {
        title: "소비 SNS 앱 '위니' 브랜딩 및 MVP 기획",
        company: "팀 위니 (사이드 프로젝트)",
        tags: ["Branding", "User Research", "MVP"],
        problem: "'절약'이라는 기능적 메시지가 사용자에게 '궁핍'의 감정을 유발하여 서비스 확장성에 한계를 보였습니다.",
        reinterpretation: "사용자 심층 인터뷰를 통해 '절약'의 본질이 '현명한 소비'이며, 이는 '나만의 취향을 쌓아가는 과정'이라는 인사이트를 발견했습니다. 브랜드 핵심 가치를 기능이 아닌 '자기표현'이라는 감성적 가치로 재정의했습니다.",
        result: "'절약'에서 '나만의 소비 취향 기록'으로 리포지셔닝하여 초기 사용자 305명을 확보하고, 긍정적인 브랜드 인식을 형성하며 서비스의 방향성을 재설정했습니다.",
        stat: { value: "초기 사용자 305명 확보", label: "MVP 론칭 후 성과" },
        visual_placeholder: "리포지셔닝 전후의 브랜드 키워드 및 사용자 반응 비교"
    }
];

export const competenciesData = {
    chart: {
        labels: [
            'Product Ownership',
            'Brand Strategy & BX Design',
            'Data-driven Growth',
            'E-Commerce Strategy',
            'Agile Communication',
            'Technical Literacy',
        ],
        data: [9, 9, 8, 9, 8, 7]
    },
    details: [
        {
            icon: 'award',
            title: 'Product Ownership',
            description: '비즈니스 목표와 사용자 가치를 연결하여 제품 비전과 로드맵을 설정하고, 실행을 통해 성과를 만들어냅니다.'
        },
        {
            icon: 'heart-handshake',
            title: 'Brand Strategy & BX Design',
            description: '브랜드의 추상적 철학을 고객이 경험할 수 있는 구체적인 디지털 여정, 기능, 콘텐츠로 전환합니다.'
        },
        {
            icon: 'database-zap',
            title: 'Data-driven Growth',
            description: 'SQL, Python 등을 활용해 데이터를 분석하고 가설을 검증하며, 서비스의 핵심 지표를 개선하고 성장을 주도합니다.'
        },
        {
            icon: 'shopping-cart',
            title: 'E-Commerce Strategy',
            description: '고객의 유입-탐색-구매-재방문 퍼널을 구조적으로 설계하고, 전환율과 고객 만족도를 동시에 최적화합니다.'
        },
        {
            icon: 'users-2',
            title: 'Agile Communication',
            description: '개발자, 디자이너, 마케터 등 다양한 직군과 투명하고 효율적으로 소통하며 아이디어를 제품으로 구현합니다.'
        },
        {
            icon: 'code-2',
            title: 'Technical Literacy',
            description: 'API 명세, 시스템 아키텍처 등 기술적 제약을 이해하고, 개발자와 긴밀하게 협업하여 실현 가능한 기획을 합니다.'
        }
    ]
};
