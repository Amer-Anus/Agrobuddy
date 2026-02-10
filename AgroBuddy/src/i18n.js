import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        learn: 'Learn Agriculture',
        cropRecommendation: 'Crop Recommendation',
        diseaseDetection: 'Disease Detection',
        weatherAlerts: 'Weather Alerts',
        resourceOptimization: 'Resource Optimization',
        governmentSchemes: 'Government Schemes',
        marketPrices: 'Market Prices',
        iotDevices: 'IoT Devices',
        aiChatbot: 'AI Chatbot'
      },
      weather: {
        title: 'Weather & Climate Alerts',
        today: 'Today',
        forecast7: '7-Day Forecast',
        hourly: 'Hourly',
        recommendations: "Farming Recommendations",
        note: 'Note: Weather data is for demonstration; check official sources for real-time data.'
      },
      hero: {
        titlePart1: 'AI-Powered Growth for',
        titleHighlight: 'Indian Agriculture',
        subtitle: 'Smarter farming decisions using data & AI',
        cta: 'Explore Insights'
      },
      iot: {
        title: 'IoT Devices (Simulated)',
        addDevice: 'Add Device',
        online: 'Online',
        offline: 'Offline',
        pause: 'Pause',
        resume: 'Resume',
        remove: 'Remove',
        soil: 'Soil (%)',
        temp: 'Temp (°C)',
        humidity: 'Humidity (%)',
        noDevices: 'No devices yet — click "Add Device" to create simulated IoT units.'
      },
      weather_ui: {
        headerDescription: 'Real-time weather updates and climate alerts for your agricultural decisions',
        displayingFor: 'Displaying weather data for today: {{date}}',
        selectLocation: 'Select Location',
        mumbai: 'Mumbai, Maharashtra',
        delhi: 'Delhi',
        bangalore: 'Bangalore, Karnataka',
        hyderabad: 'Hyderabad, Telangana',
        feelsLike: 'Feels like',
        humidity: 'Humidity',
        wind: 'Wind',
        rainfall: 'Rainfall',
        pressure: 'Pressure',
        uvIndex: 'UV Index',
        visibility: 'Visibility',
        validUntil: 'Valid until:',
        recommendations: 'Recommendations',
        todaysRecommendations: "Today's Farming Recommendations",
        watering: 'Watering',
        pestManagement: 'Pest Management',
        soilCare: 'Soil Care',
        fertilizing: 'Fertilizing',
        diseaseControl: 'Disease Control',
        forecastTitle: '7-Day Weather Forecast',
        hourlyTitle: '24-Hour Forecast'
      },
      footer: {
        tagline: 'Built for Hackathon – AI for Agriculture & Rural Support',
        copyright: '© 2026 AgroBuddy Platform. All rights reserved.'
      },
      slideshow: {
        cropRecommendation_title: 'AI Crop Recommendation',
        cropRecommendation_desc: 'Get personalized crop suggestions based on your soil, season, and location for maximum yield',
        cropRecommendation_cta: 'Explore Crop Recommendations',
        weather_title: 'Weather & Climate Alerts',
        weather_desc: 'Stay ahead with real-time weather updates and climate alerts for better farming decisions',
        weather_cta: 'View Weather Alerts',
        market_title: 'Market Price Analysis',
        market_desc: 'Track market trends and get AI-powered recommendations on when to sell your produce',
        market_cta: 'Check Market Prices',
        resource_title: 'Resource Optimization',
        resource_desc: 'Optimize water, fertilizer, and resources for maximum efficiency and sustainable farming',
        resource_cta: 'Optimize Resources',
        disease_title: 'Crop Disease Detection',
        disease_desc: 'Upload crop images to instantly detect diseases and get treatment recommendations',
        disease_cta: 'Detect Diseases',
        chatbot_title: 'AgroBuddy',
        chatbot_desc: 'Ask any farming question and get instant AI-powered answers and expert advice',
        chatbot_cta: 'Chat with AI',
        schemes_title: 'Government Schemes',
        schemes_desc: 'Discover eligible government schemes and subsidies tailored to your farming profile',
        schemes_cta: 'Find Schemes'
      },
      learn: {
        title: 'Learn Agriculture',
        description: 'Simple, student-friendly lessons to help school and college students understand how agriculture works, why it matters, and how they can be part of its future.',
        badge: 'Student-Friendly Mode',
        badgeDescription: 'Content written in simple language for learners.',
        exploreLesson: 'Explore lesson',
        cards: {
          basics_title: 'Basics of Agriculture',
          basics_desc: 'Understand what agriculture is, why it matters, and how farms feed the world.',
          lifecycle_title: 'Crop Lifecycle',
          lifecycle_desc: 'From seed to harvest – explore each stage in a crop\'s life.',
          soil_title: 'Soil Types & Testing',
          soil_desc: 'Learn about different soils, simple tests, and why healthy soil is important.',
          modern_title: 'Modern Farming Techniques',
          modern_desc: 'Discover smart irrigation, drones, sensors, and climate-smart farming.',
          schemes_title: 'Government Schemes (For Students)',
          schemes_desc: 'Easy explanations of schemes and support programs useful for young learners.',
          careers_title: 'Career Opportunities',
          careers_desc: 'Explore jobs and courses in agriculture, from scientist to agri-entrepreneur.'
        }
      },
      values: {
        sectionLabel: 'VALUES',
        sectionTitle: 'Why Our AI Platform Matters',
        sectionDescription: 'Empowering Indian farmers with intelligent tools for sustainable and profitable agriculture',
        dataDriven_title: 'Data-Driven Decisions',
        dataDriven_desc: 'Make informed choices with AI-powered insights based on real-time data and historical patterns.',
        monsoon_title: 'Monsoon-Aware Intelligence',
        monsoon_desc: 'Stay ahead of weather patterns with predictive climate analysis tailored for Indian farming seasons.',
        farmer_title: 'Farmer-First Design',
        farmer_desc: 'Built for Indian farmers with simple, intuitive interfaces that work in rural connectivity conditions.',
        sustainable_title: 'Sustainable Resource Use',
        sustainable_desc: 'Optimize water, fertilizer, and energy usage for maximum yield with minimal environmental impact.'
      }
    }
  },
  hi: {
    translation: {
      navbar: {
        home: 'मुखपृष्ठ',
        learn: 'कृषि सीखें',
        cropRecommendation: 'फसल सिफारिश',
        diseaseDetection: 'रोग पहचान',
        weatherAlerts: 'मौसम चेतावनियाँ',
        resourceOptimization: 'संसाधन अनुकूलन',
        governmentSchemes: 'सरकारी योजनाएँ',
        marketPrices: 'बाजार कीमतें',
        iotDevices: 'IoT डिवाइस',
        aiChatbot: 'AI चैटबोट'
      },
      weather: {
        title: 'मौसम और जलवायु चेतावनियाँ',
        today: 'आज',
        forecast7: '7-दिन पूर्वानुमान',
        hourly: 'घंटा-दर-घंटा',
        recommendations: 'कृषि सुझाव',
        note: 'नोट: रीयल-टाइम डेटा के लिए आधिकारिक स्रोत देखें।'
      },
      hero: {
        titlePart1: 'AI-समर्थित विकास',
        titleHighlight: 'भारतीय कृषि के लिए',
        subtitle: 'डेटा और AI का उपयोग करके स्मार्ट खेती के निर्णय',
        cta: 'इनसाइट्स देखें'
      },
      iot: {
        title: 'IoT उपकरण (सिमुलेटेड)',
        addDevice: 'उपकरण जोड़ें',
        online: 'ऑनलाइन',
        offline: 'ऑफलाइन',
        pause: 'रोकें',
        resume: 'जारी रखें',
        remove: 'हटाएं',
        soil: 'मृदा (%)',
        temp: 'तापमान (°C)',
        humidity: 'नमी (%)',
        noDevices: 'अभी कोई उपकरण नहीं — सिमुलेटेड IoT यूनिट बनाने के लिए "उपकरण जोड़ें" पर क्लिक करें।'
      },
      weather_ui: {
        headerDescription: 'आपके कृषि निर्णयों के लिए वास्तविक समय मौसम अपडेट और जलवायु चेतावनियाँ',
        displayingFor: 'आज के मौसम डेटा को दिखा रहा है: {{date}}',
        selectLocation: 'स्थान चुनें',
        mumbai: 'मुंबई, महाराष्ट्र',
        delhi: 'दिल्ली',
        bangalore: 'बैंगलोर, कर्नाटक',
        hyderabad: 'हैदराबाद, तेलंगाना',
        feelsLike: 'महसूस होता है',
        humidity: 'नमी',
        wind: 'हवा',
        rainfall: 'वर्षा',
        pressure: 'दबाव',
        uvIndex: 'यूवी सूचकांक',
        visibility: 'दृश्यता',
        validUntil: 'मान्य तक:',
        recommendations: 'सिफारिशें',
        todaysRecommendations: 'आज के कृषि सुझाव',
        watering: 'पानी देना',
        pestManagement: 'पेस्ट प्रबंधन',
        soilCare: 'मृदा देखभाल',
        fertilizing: 'उर्वरक',
        diseaseControl: 'रोग नियंत्रण',
        forecastTitle: '7-दिन का मौसम पूर्वानुमान',
        hourlyTitle: '24-घंटे का पूर्वानुमान'
      },
      footer: {
        tagline: 'हैकाथॉन के लिए बनाया गया – कृषि और ग्रामीण सहायता के लिए AI',
        copyright: '© 2026 AgroBuddy प्लेटफ़ॉर्म। सर्वाधिकार सुरक्षित।'
      },
      slideshow: {
        cropRecommendation_title: 'AI फसल सिफारिश',
        cropRecommendation_desc: 'आपकी मिट्टी, मौसम और स्थान के आधार पर व्यक्तिगत फसल सुझाव प्राप्त करें',
        cropRecommendation_cta: 'फसल सिफारिशें देखें',
        weather_title: 'मौसम और जलवायु चेतावनियाँ',
        weather_desc: 'वास्तविक समय मौसम अपडेट और जलवायु चेतावनियों के साथ आगे रहें',
        weather_cta: 'मौसम चेतावनियाँ देखें',
        market_title: 'बाजार मूल्य विश्लेषण',
        market_desc: 'बाजार के रुझानों को ट्रैक करें और अपनी उपज बेचने का सही समय जानें',
        market_cta: 'बाजार कीमतें जांचें',
        resource_title: 'संसाधन अनुकूलन',
        resource_desc: 'अधिकतम दक्षता और टिकाऊ खेती के लिए पानी, खाद और संसाधनों को अनुकूलित करें',
        resource_cta: 'संसाधनों को अनुकूलित करें',
        disease_title: 'फसल रोग पहचान',
        disease_desc: 'फसल की छवियाँ अपलोड करें और तुरंत रोगों का पता लगाएं',
        disease_cta: 'रोगों का पता लगाएं',
        chatbot_title: 'AgroBuddy',
        chatbot_desc: 'कोई भी कृषि प्रश्न पूछें और तुरंत AI-संचालित उत्तर प्राप्त करें',
        chatbot_cta: 'AI से चैट करें',
        schemes_title: 'सरकारी योजनाएँ',
        schemes_desc: 'अपनी खेती प्रोफ़ाइल के अनुसार पात्र सरकारी योजनाएँ और सब्सिडी खोजें',
        schemes_cta: 'योजनाएँ खोजें'
      },
      learn: {
        title: 'कृषि सीखें',
        description: 'सरल, छात्र-अनुकूल पाठ स्कूल और कॉलेज के छात्रों को यह समझने में मदद करते हैं कि कृषि कैसे काम करती है, यह क्यों महत्वपूर्ण है, और वे इसके भविष्य में कैसे भाग ले सकते हैं।',
        badge: 'छात्र-अनुकूल मोड',
        badgeDescription: 'सामग्री शिक्षार्थियों के लिए सरल भाषा में लिखी गई है।',
        exploreLesson: 'पाठ जारी रखें',
        cards: {
          basics_title: 'कृषि की बुनियादी बातें',
          basics_desc: 'समझें कि कृषि क्या है, यह क्यों महत्वपूर्ण है, और खेती दुनिया को कैसे खिलाती है।',
          lifecycle_title: 'फसल जीवन चक्र',
          lifecycle_desc: 'बीज से फसल तक – एक फसल के जीवन के प्रत्येक चरण को समझें।',
          soil_title: 'मिट्टी के प्रकार और परीक्षण',
          soil_desc: 'विभिन्न मिट्टी, सरल परीक्षण, और स्वस्थ मिट्टी क्यों महत्वपूर्ण है, इसके बारे में जानें।',
          modern_title: 'आधुनिक कृषि तकनीकें',
          modern_desc: 'स्मार्ट सिंचाई, ड्रोन, सेंसर, और जलवायु-स्मार्ट कृषि की खोज करें।',
          schemes_title: 'सरकारी योजनाएँ (छात्रों के लिए)',
          schemes_desc: 'युवा शिक्षार्थियों के लिए उपयोगी योजनाओं और सहायता कार्यक्रमों की सरल व्याख्या।',
          careers_title: 'कैरियर के अवसर',
          careers_desc: 'कृषि में नौकरियों और पाठ्यक्रमों की खोज करें, वैज्ञानिक से कृषि उद्यमी तक।'
        }
      },
      values: {
        sectionLabel: 'मूल्य',
        sectionTitle: 'हमारे एआई प्लेटफॉर्म क्यों मायने रखता है',
        sectionDescription: 'भारतीय किसानों को टिकाऊ और लाभदायक कृषि के लिए बुद्धिमान उपकरणों के साथ सशक्त बनाना',
        dataDriven_title: 'डेटा-संचालित निर्णय',
        dataDriven_desc: 'वास्तविक समय डेटा और ऐतिहासिक पैटर्न के आधार पर AI-संचालित अंतर्दृष्टि के साथ सूचित विकल्प बनाएं।',
        monsoon_title: 'मानसून-जागरूक बुद्धिमत्ता',
        monsoon_desc: 'भारतीय कृषि मौसम के लिए अनुकूलित भविष्य कथन जलवायु विश्लेषण के साथ मौसम पैटर्न से आगे रहें।',
        farmer_title: 'किसान-पहले डिजाइन',
        farmer_desc: 'भारतीय किसानों के लिए बनाया गया साधारण, सहज अंतरफलक जो ग्रामीण कनेक्टिविटी स्थितियों में काम करता है।',
        sustainable_title: 'टिकाऊ संसाधन उपयोग',
        sustainable_desc: 'जल, खाद, और ऊर्जा के उपयोग को अधिकतम उपज के साथ न्यूनतम पर्यावरणीय प्रभाव के लिए अनुकूलित करें।'
      }
    }
  },
  te: {
    translation: {
      navbar: {
        home: 'హోమ్',
        learn: 'వ్యవసాయాన్ని నేర్చుకోండి',
        cropRecommendation: 'పంట సిఫార్సు',
        diseaseDetection: 'రోగ గుర్తింపు',
        weatherAlerts: 'వాతావరణ హెచ్చరికలు',
        resourceOptimization: 'వనరుల ఆప్టిమైజేషన్',
        governmentSchemes: 'ప్రభుత్వ పథకాలు',
        marketPrices: 'మార్కెట్ ధరలు',
        iotDevices: 'IoT పరికరాలు',
        aiChatbot: 'AI చాట్‌బాట్'
      },
      weather: {
        title: 'వాతావరణ మరియు హవామా హెచ్చరికలు',
        today: 'ఈ రోజు',
        forecast7: '7-రోజుల పూర్వానుమానము',
        hourly: 'గంటలవారీ',
        recommendations: 'వ్యవసాయ సిఫార్సులు',
        note: 'జరగుతున్న డేటా కొరకు అధికారిక మూలాలను తనిఖీ చేయండి.'
      },
      hero: {
        titlePart1: 'AI-ఆధారిత వృద్ధి',
        titleHighlight: 'భారతీయ వ్యవసాయానికి',
        subtitle: 'డేటా & AI ఉపయోగించి తెలివైన వ్యవసాయ నిర్ణయాలు',
        cta: 'ఇన్సైట్స్‌ను అన్వేషించండి'
      },
      iot: {
        title: 'IoT పరికరాలు (సిమ్యులేటెడ్)',
        addDevice: 'పరికరం చేర్చండి',
        online: 'ఆన్‌లైన్',
        offline: 'ఆఫ్‌లైన్',
        pause: ' స్టాప్ చేయి',
        resume: 'పునరారంభించు',
        remove: 'తొలగించు',
        soil: 'మట్టిరకం (%)',
        temp: 'తాపం (°C)',
        humidity: ' తేమ (%)',
        noDevices: 'ఇపుడు ఏ పరికరాలూ లేవు — సిమ్యులేటెడ్ IoT యూనిట్లను సృష్టించడానికి "పరికరం చేర్చండి" క్లిక్ చేయండి.'
      },
      weather_ui: {
        headerDescription: 'మీ వ్యవసాయ నిర్ణయాల కోసం నిజ‑కాల వాతావరణ నవీకరణలు మరియు హవామా హెచ్చరికలు',
        displayingFor: 'ఈ రోజుకి వాతావరణ డేటా ప్రదర్శించబడుతోంది: {{date}}',
        selectLocation: 'ప్రాంతాన్ని ఎంచుకోండి',
        mumbai: 'ముంబై, మహారాష్ట్ర',
        delhi: 'దిల్లీ',
        bangalore: 'బెంగళూరు, కర్నాటక',
        hyderabad: 'హైరాబాద్, తెలంగాణ',
        feelsLike: 'అనిపించడం',
        humidity: 'తేమ',
        wind: 'గాలి',
        rainfall: 'వర్షపాతం',
        pressure: 'పొత్తి',
        uvIndex: 'UV సూచిక',
        visibility: 'దృశ్యరేఖ',
        validUntil: 'చెల్లుబాటు అయేది:',
        recommendations: 'సిఫార్సులు',
        todaysRecommendations: 'ఈ రోజు వ్యవసాయ సూచనలు',
        watering: 'నీరు ఇవ్వడం',
        pestManagement: 'పొద్దుపడే పీడకల నిర్వహణ',
        soilCare: 'మట్టి శ్రేణి',
        fertilizing: 'ఎరువుల పద్ధతి',
        diseaseControl: 'రోగ నియంత్రణ',
        forecastTitle: '7-రోజుల వాతావరణ అంచనా',
        hourlyTitle: '24-గంటల అంచనా'
      },
      footer: {
        tagline: 'హాక్‌థాన్ కోసం రూపొందించబడినది – వ్యవసాయం మరియు గ్రామీణ మద్దతుకు AI',
        copyright: '© 2026 AgroBuddy ప్లాట్‌ఫార్మ్. అన్ని హక్కులు చెల్లుబాటు.'
      },
      slideshow: {
        cropRecommendation_title: 'AI ఫసల సిఫార్సు',
        cropRecommendation_desc: 'మీ మట్టి, సీజన్ మరియు ప్రాంతం ఆధారంగా వ్యక్తిగత ఫసల సిఫార్సులను పొందండి',
        cropRecommendation_cta: 'ఫసల సిఫార్సులను అన్వేషించండి',
        weather_title: 'వాతావరణ మరియు హవామా హెచ్చరికలు',
        weather_desc: 'నిజ‑కాల వాతావరణ నవీకరణలు మరియు హవామా హెచ్చరికలతో ముందుకు ఉండండి',
        weather_cta: 'వాతావరణ హెచ్చరికలను చూడండి',
        market_title: 'మార్కెట్ ధర విశ్లేషణ',
        market_desc: 'మార్కెట్ ట్రెండ్‌లను ట్రాక్ చేయండి మరియు మీ ఉత్పత్తిని విక్రయించే సరైన సమయం తెలుసుకోండి',
        market_cta: 'మార్కెట్ ధరలను చెక్ చేయండి',
        resource_title: 'వనరుల ఆప్టిమైజేషన్',
        resource_desc: 'సর్వোచ్చ సామర్థ్యం మరియు సంపూర్ణ వ్యవసాయం కోసం నీరు, సారం మరియు వనరులను ఆప్టిమైజ్ చేయండి',
        resource_cta: 'వనరులను ఆప్టిమైజ్ చేయండి',
        disease_title: 'ఫసల రోగ గుర్తింపు',
        disease_desc: 'ఫసల చిత్రాలను అప్‌లోడ్ చేయండి మరియు తక్షణమే రోగాలను గుర్తించండి',
        disease_cta: 'రోగాలను గుర్తించండి',
        chatbot_title: 'AgroBuddy',
        chatbot_desc: 'ఏదైనా వ్యవసాయ ప్రశ్న అడగండి మరియు తక్షణ AI-శక్తిచేసిన సమాధానాలను పొందండి',
        chatbot_cta: 'AIతో చాట్ చేయండి',
        schemes_title: 'ప్రభుత్వ పథకాలు',
        schemes_desc: 'మీ వ్యవసాయ ప్రొఫైల్‌కు అనుగుణంగా నిర్ధారణ చేసిన ప్రభుత్వ పథకాలు మరియు సబ్సిడీలను కనుగొనండి',
        schemes_cta: 'పథకాలను కనుగొనండి'
      },
      learn: {
        title: 'వ్యవసాయాన్ని నేర్చుకోండి',
        description: 'సరళమైన, విద్యార్థి-స్నేహపూర్వక పాఠాలు స్కూల్ మరియు కళాశాల విద్యార్థులకు వ్యవసాయం ఎలా వ్యవహరిస్తుందో, ఎందుకు ముఖ్యమైనది, మరియు వారు దాని భవిష్యత్‌లో ఎలా భాగం కావాలో గ్రహించడానికి సహాయపడతాయి.',
        badge: 'విద్యార్థి-స్నేహపూర్వక మోడ్',
        badgeDescription: 'విషయవస్తువు నేర్చుకునేవారి కోసం సరళ భాషలో వ్రాయబడింది.',
        exploreLesson: 'పాఠం అన్వేషించండి',
        cards: {
          basics_title: 'వ్యవసాయం యొక్క ప్రాథమికాలు',
          basics_desc: 'వ్యవసాయం ఏమిటి, ఎందుకు ముఖ్యమైనది, మరియు చేటలు ప్రపంచాన్ని ఎలా పోషిస్తాయో అర్థం చేసుకోండి.',
          lifecycle_title: 'ఫసల జీవితచక్రం',
          lifecycle_desc: 'విత్తనం నుండి కస్బా వరకు – ఫసల జీవితం యొక్క ప్రతిదీ దశను విస్ఫూర్తి చేయండి.',
          soil_title: 'మట్టి రకాలు & పరీక్ష',
          soil_desc: 'విభిన్నమైన విల్లలు, సరళమైన పరీక్షలు, మరియు ఆరోగ్యకరమైన మట్టి ఎందుకు ముఖ్యమైనది, ఇది గురించి తెలుసుకోండి.',
          modern_title: 'ఆధునిక వ్యవసాయ పద్ధతులు',
          modern_desc: 'స్మార్ట్ నీటిపారేవ, డ్రోన్‌లు, సెన్సార్‌లు, మరియు వాతావరణ-స్మార్ట్ వ్యవసాయాన్ని కనుగొనండి.',
          schemes_title: 'ప్రభుత్వ పథకాలు (విద్యార్థులకు)',
          schemes_desc: 'యువ నేర్చుకునేవారికి ఉపయోగకరమైన పథకాలు మరియు ఆధారపు కార్యక్రమాల సరళ వివరణ.',
          careers_title: 'కెరీర్ సంభావనలు',
          careers_desc: 'వ్యవసాయం లో ఉద్యోగాలు మరియు కోర్సులను కనుగొనండి, శాస్త్రవేత్త నుండి కృషి-ఆయుధ వరకు.'
        }
      },
      values: {
        sectionLabel: 'తెలుగు విలువలు',
        sectionTitle: 'మన AI ప్ల్యాట్‌ఫర్మ్ ఎందుకు ముఖ్యమైనది',
        sectionDescription: 'భారతీయ రైతులను సమకూలమైన మరియు లాభదాయక వ్యవసాయం కోసం తెలివిగల సాధనాలతో సాధికారం చేయడం',
        dataDriven_title: 'డేటా-ఆధారిత నిర్ణయాలు',
        dataDriven_desc: 'నిజ‑కాల డేటా మరియు చారిత్రక నమూనాల ఆధారంగా AI-శక్తిచేసిన అంతర్దృష్టితో సమాచారించిన ఎంపికలు చేయండి.',
        monsoon_title: 'మానసూన్-సమర్థ తెలివితక',
        monsoon_desc: 'భారతీయ వ్యవసాయ సీజన్‌ల కోసం తయారిచేసిన శ్రద్ధ వాతావరణం విశ్లేషణ ఉపయోగించి వాతావరణ నమూనాల నుండి ముందుకు ఉండండి.',
        farmer_title: 'రైతు-మొదటి డిజైన్',
        farmer_desc: 'భారతీయ రైతుల కోసం నిర్మితమైన సరళమైన, సహజ ఇంటర్‌ఫేస్‌లు, గ్రామీణ కనెక్టివిటీ వ్యవస్థల్లో కూడా పనిచేస్తాయి.',
        sustainable_title: 'సంపూర్ణ వనరు ఉపయోగం',
        sustainable_desc: 'నీరు, ఫర్టిలైజర్, మరియు శక్తి వినియోగాన్ని గరిష్ఠ దిగుబడితో కనీస పర్యావరణ ప్రభావ కోసం ఆప్టిమైజ్ చేయండి.'
      }
    }
  }
}

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
})

export default i18n
