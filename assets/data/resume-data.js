(function () {
  window.ResumeApp = window.ResumeApp || {};
  window.ResumeApp.data = {
    basics: {
      badge: "Personal Resume",
      name: "周珍运",
      title: "Web 全栈开发工程师",
      summary: "具备 2 年开发经验，参与并独立完成网站、后台管理系统、支付订阅模块与智能回复服务从 0 到 1 的落地，熟悉前端页面开发、服务端接口设计、数据库使用与 Linux 服务器部署流程，并具备 AI 模型应用经验，可结合相关模型完成实际业务任务。",
      contacts: [
        "男 | 27 岁",
        "180****3146",
        "2922****@qq.com",
        "2 年工作经验",
        "期望城市：深圳"
      ],
      stats: [
        {
          label: "求职意向",
          value: "Web 开发工程师 / 全栈方向",
          detail: "网站建设、后台系统、支付订阅、AI 应用方向"
        },
        {
          label: "核心优势",
          value: "适应力强、抗压能力强、能独立解决问题",
          detail: "具备良好编程习惯，并掌握一定硬件基础知识"
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
            name: "网站与前端开发",
            level: 86,
            description: "熟悉 Astro、Next.js、React、TypeScript、Ant Design 与 Tailwind CSS，具备官网、多页面站点、响应式页面和后台管理系统开发经验。"
          },
          {
            name: "服务端与部署运维",
            level: 82,
            description: "熟悉 FastAPI、Next.js API、PostgreSQL、Redis、Cloudflare D1 / R2、Nginx 与 Linux 服务器部署，能够完成项目上线与日常维护。"
          },
          {
            name: "业务系统与工程实践",
            level: 80,
            description: "熟悉用户管理、支付订阅、Webhook、权限控制、会话鉴权、日志监控、异步任务与接口安全等常见系统能力。"
          },
          {
            name: "AI 应用与任务落地",
            level: 78,
            description: "熟悉 ChatGPT、Claude Opus、GitHub Copilot、Cursor 等 AI 与编程辅助工具，能够结合相关模型完成信息提取、知识检索、草稿生成、自动回复与开发提效等任务。"
          },
          {
            name: "C / C++ 与 Linux 基础",
            level: 76,
            description: "熟悉 C 语言基础知识、常见数据结构与算法，了解 Linux 开发环境、Socket 通信与基础网络请求处理。"
          }
        ]
      },
      keywords: {
        title: "关键词",
        items: ["Next.js", "FastAPI", "AI 应用", "自动回复", "PostgreSQL", "Redis", "Linux", "C/C++"]
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
            role: "网站管理、维护与技术支持",
            period: "2024.06 - 至今",
            points: [
              "负责公司网站的日常管理与维护工作，跟进页面内容更新、功能检查和线上问题处理，保障网站稳定运行。",
              "负责处理用户在使用过程中的常见问题，结合实际反馈进行排查、沟通与跟进，提升用户使用体验。",
              "参与网站相关功能的维护与优化，配合业务需求完成页面调整、配置更新和基础功能支持。",
              "负责服务器日常管理与基础运维工作，包括环境维护、服务检查、部署更新及线上异常排查。"
            ]
          }
        ]
      },
      additionalSections: [
        {
          type: "bullet",
          title: "网站开发经验",
          items: [
            "独立参与官网类网站搭建，基于 Astro、React 与 Tailwind CSS 实现多页面、响应式展示与内容组织。",
            "熟悉多语言站点、SEO、sitemap、博客内容管理、静态构建优化以及联系表单接口接入等常见网站能力。"
          ]
        }
      ],
      projects: {
        title: "项目经历",
        items: [
          {
            name: "用户管理系统",
            stack: "Next.js / React / TypeScript / Ant Design / Cloudflare D1 / R2 / OpenNext",
            badge: "从 0 到 1 / 独立开发",
            points: [
              "从 0 到 1 完成用户管理系统的需求梳理、页面搭建、接口开发与部署发布，基于 Next.js App Router、React、TypeScript 与 Ant Design 搭建用户端与后台管理端。",
              "实现注册登录、会话保持、路由守卫、角色权限控制、用户分页检索与账号状态管理等核心模块，提升系统可用性与后台管理效率。",
              "结合 httpOnly Session Cookie、邮箱验证码、人机校验、限流、同源校验与安全响应头等机制增强账号体系安全性。",
              "使用 Cloudflare D1 / R2 与 OpenNext 构建云端运行和部署链路，并通过结构化日志与接口监控提升排障和维护效率。"
            ]
          },
          {
            name: "智能回复助手",
            stack: "FastAPI / PostgreSQL / pgvector / Redis / Celery / Nginx",
            badge: "从 0 到 1 / 独立开发",
            points: [
              "从 0 到 1 设计并实现智能回复助手，围绕邮件/客服场景完成服务端架构搭建、流程编排、知识检索与回复生成能力落地。",
              "基于 FastAPI 构建消息理解、知识召回、草稿生成、人工审核与异步处理链路，提升复杂场景下的自动化处理效率。",
              "使用 PostgreSQL + pgvector 实现知识库与向量检索，结合 Redis 与 Celery 支持缓存、任务队列、定时任务和后台异步执行。",
              "具备 Linux 服务器部署与上线经验，熟悉 Nginx 反向代理、Uvicorn、systemd 进程管理等方案，能够支持项目稳定运行与后续维护。"
            ]
          },
          {
            name: "支付与订阅管理模块",
            stack: "Next.js / React / TypeScript / Ant Design / Webhook / Cloudflare D1",
            badge: "独立开发 / 线上可用",
            points: [
              "在用户管理系统中独立设计并实现支付与订阅管理模块，完成订阅商品配置、购买入口、订单管理、退款审核与到期提醒等功能闭环。",
              "对接第三方支付回调，设计订单状态同步、订阅周期计算、退款状态流转与本地权益更新机制，提升支付链路一致性与可维护性。",
              "基于 Next.js、TypeScript 与 Ant Design 搭建后台管理页面，支持订阅产品维护、订单查询、订阅概览与运营配置，提升后台操作效率。",
              "结合权限校验、同源校验、签名校验、幂等处理与监控日志等机制增强支付相关接口的安全性与稳定性。"
            ]
          }
        ]
      },
      selfReview: {
        title: "个人优势",
        content: "具备从 0 到 1 完成网站、后台管理系统、支付订阅模块和智能回复服务落地经验，熟悉前后端协作、数据库使用、接口联调、服务器部署与上线流程，并具备 ChatGPT、Claude Opus、GitHub Copilot、Cursor 等 AI 与编程辅助工具使用经验，能够结合相关模型完成信息提取、知识检索、自动回复和开发提效等任务。做事偏结果导向，适应新环境较快，能够独立分析问题并推进落地。"
      }
    },
    footerNote: "此页面为 HTML 简历模板，可直接在浏览器打开，也可使用浏览器打印导出 PDF。"
  };
})();