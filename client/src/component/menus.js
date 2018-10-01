const menus = {
    aboutUs: {
        image: "icon_aboutUs",
        title: "ABOUT US",
        link: "/about-us",
        color: "#303030",
        menu: [
            {
                value: "Industry we service",
                htag: "#industry"
            },
            {
                value: "Our story",
                htag: "#story"
            },
            {
                value: "Our value",
                htag: "#value"
            },
        ]
    },
    solution:{
        image: "icon_solution",
        title: "SOLUTION",
        link: "/solution",
        color: "#505050",
        menu: [
            {
                value: "WeChat Pay",
                htag: "#weChat",  
            },
            {
                value: "AliPay",
                htag: "#alipay",
            },
            {
                value: "Tailor made Strategies",
                htag: "#tailor"
            }
        ]
    },
    caseStudy:{
        image: "icon_caseStudies",
        title: "CASE STUDY",
        link: "/case-study",
        color: "#707070",
        menu: [
            {
                value: "Case studies",
                htag: "#case",  
            },
            {
                value: "Testimonies",
                htag: "#testimonies"
            }
        ]
    },
    contactUs:{
        image: "icon_contactUs",
        title: "CONTACT US",
        link: "/contact-us",
        color: "#909090",
        menu: [
            {
                value: "Enquiry form",
                htag: "#form",  
            },
            {
                value: "Our location",
                htag: "#location",
            },
            {
                value: "Download our App",
                htag: "#download"
            }
        ]
    },
    login:{
        image: "icon_login",
        title: "LOG IN",
        link: "http://paylinx.cn/merchant",
        color: "#a0a0a0",
        menu: [
            {
                value: "Merchant Login", 
                link: "http://paylinx.cn/merchant"
            },
            {
                value: "Agenct login",
                link: "http://paylinx.cn/merchant"
            },
            {
                value: "API document",
                link: "http://paylinx.cn/doc/index.html"
            }
        ]
    }
}

export default menus;