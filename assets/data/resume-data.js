(function () {
  window.ResumeApp = window.ResumeApp || {};
  window.ResumeApp.data = {
    basics: {
      badge: "Personal Resume",
      name: "周珍运",
      title: "全栈开发工程师 / 桌面端工具链工程师",
      summary: "具备 2 年软件开发、交付维护与技术支持经验，覆盖 Web 全栈开发、桌面端软件构建发布、Python 自动化、云平台部署和技术支持系统维护。熟悉从官网页面、后台系统、支付订阅、用户反馈，到 Rust / Tauri 构建、安装包生成、版本发布、下载链路校验和日志排障的完整流程，能够独立梳理复杂业务并沉淀可执行 SOP。",
      contacts: [
        "男 | 27 岁",
        "18026403146",
        "2922188469@qq.com",
        "2 年工作经验",
        "期望城市：深圳",
        {
          label: "GitHub",
          value: "github.com/zhouzhiouhub",
          href: "https://github.com/zhouzhiouhub"
        },
        {
          label: "在线简历",
          value: "zhouzhiouhub.github.io/CV",
          href: "https://zhouzhiouhub.github.io/CV/"
        }
      ],
      stats: [
        {
          label: "求职意向",
          value: "全栈开发 / 桌面端工具链 / Python 自动化",
          detail: "网站建设、后台系统、桌面端交付、订阅支付、AI 应用与运维方向"
        },
        {
          label: "交付经验",
          value: "Web + 桌面端 + 自动化",
          detail: "覆盖需求梳理、开发联调、构建发布、部署监控和问题闭环"
        },
        {
          label: "核心优势",
          value: "适应力强、抗压能力强、能独立解决问题",
          detail: "能够把重复流程沉淀为脚本、检查清单、文档和 SOP"
        }
      ]
    },
    sidebar: {
      profile: {
        title: "个人信息",
        items: [
          { label: "性别", value: "男" },
          { label: "年龄", value: "27 岁" },
          { label: "学历", value: "本科" },
          { label: "专业", value: "人工智能" },
          { label: "工作经验", value: "2 年" }
        ]
      },
      skills: {
        title: "专业技能",
        items: [
          {
            name: "Web 全栈与前端工程",
            level: 88,
            description: "熟悉 Astro、Next.js、React、TypeScript、Ant Design 与 Tailwind CSS，具备官网、多页面站点、后台管理系统、响应式页面、多语言站点和 SEO 基础开发经验。"
          },
          {
            name: "桌面端交付与发布链路",
            level: 84,
            description: "熟悉 Rust / Tauri 构建、npm 脚本、插件处理、安装包生成、MSIX、版本号管理、会员授权校验配置和应用商店上架流程。"
          },
          {
            name: "Python 自动化与数据处理",
            level: 86,
            description: "熟悉 Python、Tkinter、openpyxl、pywin32、PyInstaller、Windows 任务计划和批处理脚本，能够开发本地桌面工具与数据汇总脚本。"
          },
          {
            name: "云平台部署与运维排障",
            level: 82,
            description: "熟悉 Cloudflare Workers / Pages / R2、CDN 缓存、Linux systemd、Nginx、宝塔面板、证书续签、服务监控和日志排查。"
          },
          {
            name: "业务系统与 AI 应用",
            level: 80,
            description: "熟悉用户管理、会员授权、订阅支付、Webhook、订单识别、官网反馈转发、技术支持 AI、知识库检索和售后问题跟进。"
          },
          {
            name: "C / C++ 与 Linux 基础",
            level: 76,
            description: "掌握 C 语言基础、常见数据结构与算法，了解 Linux 开发环境、Socket 通信与基础网络请求处理。"
          }
        ]
      },
      keywords: {
        title: "关键词",
        items: [
          "Next.js",
          "Astro",
          "Tauri",
          "Python",
          "FastAPI",
          "Cloudflare",
          "Linux",
          "systemd",
          "Nginx",
          "PostgreSQL",
          "Redis",
          "Webhook"
        ]
      },
      education: {
        title: "教育背景",
        items: [
          {
            school: "贵州师范学院",
            major: "本科 / 人工智能",
            period: "2020 - 2024"
          }
        ]
      },
      extras: {
        title: "资格证书",
        items: [
          "机动车驾驶证 C1",
          "计算机技术与软件专业技术资格证书"
        ]
      }
    },
    main: {
      experience: {
        title: "工作经历",
        items: [
          {
            company: "深圳市光宇宙科技有限公司",
            role: "软件开发 / 工具链与交付工程师",
            period: "2024.06 - 2026.07",
            points: [
              "负责多款桌面端软件的打包、发布、检测、分发与下载链路维护，覆盖官网、CDN、对象存储、应用商店等多个发布渠道。",
              "维护桌面端构建流程，包括 Rust 内核编译、Tauri 前端构建、插件目录清理、安装包生成、版本号管理和会员授权校验配置。",
              "维护官网、下载页、更新日志、博客、多语言页面和静态资源发布流程，支持多语言内容同步、下载入口校验和缓存刷新。",
              "参与用户管理、会员订阅和支付相关系统维护，负责上线前安全预检、生产构建、Staging 验证、生产部署和 Webhook 链路检查。",
              "开发和维护 Python 自动化工具，包括订单汇总、用户日志下载、邮箱验证码监听转发、Excel 数据处理和 Windows 本地桌面工具。",
              "维护 Linux 服务器上的系统服务、定时任务、网站监控、证书续签、反馈转发和 AI 技术支持相关服务，能够通过日志和服务状态定位线上问题。",
              "参与用户支持流程，处理邮箱、即时通讯、社区、应用商店评论等渠道反馈，协助收集截图、视频、日志并推动问题闭环。"
            ]
          }
        ]
      },
      additionalSections: [
        {
          type: "bullet",
          title: "综合交付能力",
          items: [
            "能够从业务需求、页面开发、接口联调、构建发布、部署验证到线上监控进行端到端跟进，降低研发、运维和客服支持之间的信息断层。",
            "熟悉上线前检查流程，能够围绕安全配置、环境变量、生产构建、Webhook、下载入口、缓存刷新和核心功能验证做发布前拦截。",
            "善于把重复性操作沉淀为 Python 脚本、批处理任务、运行检查清单和 
            "
          ]
        }
      ],
      projects: {
        title: "项目经历",
        items: [
          {
            name: "桌面端软件打包与发布工具链",
            stack: "Rust / Tauri / npm scripts / Python / MSIX / 应用商店发布",
            badge: "构建发布 / 工具链维护",
            points: [
              "梳理并维护桌面端软件从内核编译、前端构建、插件处理到安装包生成的完整发布流程，支撑多款桌面端产品持续迭代。",
              "使用 Rust / Tauri、npm 脚本与 Python 自动化脚本完成多版本构建，支持完整版本、精简版本和插件裁剪策略。",
              "维护会员授权密钥生成与构建配置，保证软件包发布后可正常完成授权校验，并配合版本号管理完成发版记录同步。",
              "支持应用商店和游戏平台发布流程，包括包体转换、商店预检、上传、状态查询、版本递增和发布说明配置。"
            ]
          },
          {
            name: "官网与下载发布系统",
            stack: "Astro / Next.js / Cloudflare Pages / R2 / CDN / SEO",
            badge: "多站点维护 / 自动化部署",
            points: [
              "维护多个品牌和产品官网及下载站点，覆盖首页、产品页、下载页、更新日志、博客、多语言页面和静态资源。",
              "使用 Astro / Next.js 及云端部署平台完成静态站点维护和自动化部署，发布前执行构建检查、预览验证与页面内容核对。",
              "负责版本发布链路，包括安装包上传、后台更新记录、下载地址配置、客户端更新提示、CDN / 边缘缓存刷新与回归验证。",
              "维护多个专题站点内容，支持按业务需要扩展页面并自动部署到云端运行环境，提升内容发布效率。"
            ]
          },
          {
            name: "用户管理与订阅支付系统",
            stack: "Next.js / React / TypeScript / Ant Design / Cloudflare D1 / R2 / Webhook",
            badge: "业务系统 / 线上维护",
            points: [
              "参与用户管理后台和订阅支付链路维护，支持生产环境与 Staging 环境分离部署，保障上线验证和生产发布节奏。",
              "围绕注册登录、会话保持、角色权限、用户检索、账号状态、会员授权、订阅订单和权益同步等模块进行维护和优化。",
              "参与支付订阅、Checkout、客户门户、Webhook 回调和订单识别链路维护，配合日志监控和幂等处理提升链路稳定性。",
              "对登录、验证码、Session、开发开关、生产环境安全配置等风险点进行发布前检查和问题排查。"
            ]
          },
          {
            name: "Python 自动化运营与数据工具",
            stack: "Python / Tkinter / openpyxl / pywin32 / PyInstaller / Windows 任务计划",
            badge: "自动化工具 / 数据处理",
            points: [
              "开发和维护订单汇总桌面工具，基于 Python、Tkinter、openpyxl、pywin32 和 PyInstaller 支持本地可视化操作、Excel 输出和 EXE 构建。",
              "维护订单导出、订单汇总、用户日志下载等自动化脚本，支持手动运行和 Windows 任务计划定时执行。",
              "设计日志下载运行检查方式，通过日志文件、共享目录访问、失败重试和任务计划配置保障稳定运行。",
              "维护邮箱验证码监听转发服务，基于 Python 与 systemd 支持多邮箱监听、验证码识别、消息转发和服务日志排查。"
            ]
          },
          {
            name: "技术支持 AI 与运维监控",
            stack: "FastAPI / PostgreSQL / pgvector / Redis / Celery / Nginx / systemd",
            badge: "AI 应用 / 服务维护",
            points: [
              "参与技术支持 AI 系统交接和维护，覆盖 AI 回复、知识库、日志管理、后台接口和部署信息。",
              "基于 FastAPI、PostgreSQL、pgvector、Redis 与 Celery 等技术栈参与消息理解、知识召回、草稿生成和异步任务链路维护。",
              "维护服务器定时任务和系统服务，包括网站可用性监控、服务器健康监控、SSL 证书续签、反馈服务重启和 AI 服务更新。",
              "对服务异常进行排查，熟悉通过 systemd、journalctl、Nginx 配置、定时任务日志和宝塔面板定位问题。"
            ]
          }
        ]
      },
      selfReview: {
        title: "个人优势",
        content: "做事偏结果导向，适应新环境较快，能够独立分析问题并推进落地。具备 Web 全栈开发、桌面端构建交付、Python 自动化、云平台部署和技术支持系统维护的复合经验，既能参与从 0 到 1 的功能建设，也能承担持续维护、发布验证、日志排障和用户问题闭环等工程化工作。"
      }
    },
    footerNote: "此页面为 HTML 简历模板，可直接在浏览器打开，也可使用浏览器打印导出 PDF。"
  };
})();
