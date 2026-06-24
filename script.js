const year = document.querySelector("#year");

if (year) {
  year.textContent = new Date().getFullYear();
}

document.querySelectorAll("[data-carousel]").forEach((carousel) => {
  const track = carousel.querySelector("[data-carousel-track]");
  const slides = Array.from(carousel.querySelectorAll("[data-carousel-slide]"));
  const prevButton = carousel.querySelector("[data-carousel-prev]");
  const nextButton = carousel.querySelector("[data-carousel-next]");
  const counter = carousel.querySelector("[data-carousel-counter]");
  let activeIndex = 0;

  const updateCarousel = () => {
    if (!track || slides.length === 0) {
      return;
    }

    track.style.transform = `translateX(-${activeIndex * 100}%)`;
    if (counter) {
      counter.textContent = `${activeIndex + 1} / ${slides.length}`;
    }

    slides.forEach((slide, index) => {
      slide.toggleAttribute("aria-hidden", index !== activeIndex);
      if (index !== activeIndex) {
        slide.querySelectorAll("video").forEach((video) => video.pause());
      }
    });
  };

  const moveCarousel = (direction) => {
    activeIndex = (activeIndex + direction + slides.length) % slides.length;
    updateCarousel();
  };

  prevButton?.addEventListener("click", () => moveCarousel(-1));
  nextButton?.addEventListener("click", () => moveCarousel(1));
  updateCarousel();
});

const translationEntries = [
  { selector: ".skip-link", zh: "跳转到正文" },
  { selector: ".greedy-nav .masthead__menu-item", index: 0, zh: "主页" },
  { selector: ".greedy-nav .masthead__menu-item", index: 1, zh: "关于我" },
  { selector: ".greedy-nav .masthead__menu-item", index: 2, zh: "新闻" },
  { selector: ".greedy-nav .masthead__menu-item", index: 3, zh: "成果" },
  { selector: ".greedy-nav .masthead__menu-item", index: 4, zh: "代表论文" },
  { selector: ".greedy-nav .masthead__menu-item", index: 5, zh: "开源项目" },
  { selector: ".greedy-nav .masthead__menu-item", index: 6, zh: "经历" },
  { selector: ".greedy-nav .masthead__menu-item", index: 7, zh: "联系" },
  { selector: ".author__name", zh: "张锦权(Zhang Jinquan)" },
  { selector: ".author__bio", zh: "深圳大学人工智能硕士研究生" },
  { selector: ".author__urls > li", index: 0, zh: '<span class="icon-row__icon" aria-hidden="true">🏫</span><span>深圳大学</span>' },
  { selector: ".author__urls > li", index: 1, zh: '<span class="icon-row__icon" aria-hidden="true">📍</span><span>中国深圳</span>' },
  {
    selector: ".language-switcher__label span:last-child",
    zh: "语言",
  },
  { selector: ".page__content > h1", index: 0, zh: '<span class="heading-icon" aria-hidden="true">👋</span>关于我' },
  { selector: ".page__content > h1", index: 1, zh: '<span class="heading-icon" aria-hidden="true">✨</span>新闻' },
  { selector: ".page__content > h1", index: 2, zh: '<span class="heading-icon" aria-hidden="true">🏅</span>成果' },
  { selector: ".page__content > h1", index: 3, zh: '<span class="heading-icon" aria-hidden="true">📄</span>代表论文' },
  { selector: ".page__content > h1", index: 4, zh: '<span class="heading-icon" aria-hidden="true">🛠️</span>开源项目' },
  { selector: ".page__content > h1", index: 5, zh: '<span class="heading-icon" aria-hidden="true">🔬</span>研究方向' },
  { selector: ".page__content > h1", index: 6, zh: '<span class="heading-icon" aria-hidden="true">💼</span>经历' },
  { selector: ".page__content > h1", index: 7, zh: '<span class="heading-icon" aria-hidden="true">📬</span>联系' },
  { selector: ".page__content > h2", index: 0, zh: '<span class="subheading-icon" aria-hidden="true">📄</span>论文' },
  { selector: ".page__content > h2", index: 1, zh: '<span class="subheading-icon" aria-hidden="true">📜</span>专利' },
  { selector: ".page__content > h2", index: 2, zh: '<span class="subheading-icon" aria-hidden="true">🤖</span>机器人学习与 VLA 鲁棒性' },
  { selector: ".page__content > h2", index: 3, zh: '<span class="subheading-icon" aria-hidden="true">🧪</span>真实机器人学习系统' },
  { selector: ".page__content > h2", index: 4, zh: '<span class="subheading-icon" aria-hidden="true">🎥</span>演示视频' },
  {
    selector: ".about-highlights > li",
    index: 0,
    zh: '我是 <strong>张锦权(Zhang Jinquan)</strong>，深圳大学人工智能专业硕士研究生，人工智能与数字经济广东省实验室(深圳)世界模型课题组成员。课题组由 <strong>田奇(Tian Qi)</strong> 领导，他是华为终端 BG 首席科学家。在此之前，我获得了 <strong>江苏大学</strong> 学士学位。',
  },
  {
    selector: ".about-highlights > li",
    index: 1,
    zh: '我的研究聚焦于 <strong>机器人学习</strong> 以及 <strong>VLA / WAM</strong> 模型在真实物理世界中的鲁棒性，尤其关注面向物理环境的后训练与微调。',
  },
  {
    selector: ".about-highlights > li",
    index: 2,
    zh: '我的工作已被 <strong>IROS</strong> 和 <strong>AHSWN</strong> 接收，并已申请多项发明专利。',
  },
  {
    selector: ".about-highlights > li",
    index: 3,
    zh: '我目前在 <strong>Roboscience</strong> 实习，负责 VLA / WAM 模型的微调与后训练，使模型在仿真环境中保持优秀表现，同时在物理世界中具备鲁棒性；我也参与了 VLA 机器人在大型商场、超市货架场景中的真实评测。',
  },
  {
    selector: ".job-notice",
    zh: "📢📢 我希望加入一个充满活力且目标明确的机器人团队。如果您感兴趣，请通过 2410815010@mails.szu.edu.cn 联系我。",
  },
  {
    selector: "#news + h1 + ul > li",
    index: 0,
    zh: '<em>2026.06</em>：我的论文 <strong>结构感知鲁棒微调：防御视觉-语言-动作机器人中的物理注意力劫持</strong> 被 IROS 2026 接收。',
  },
  {
    selector: "#news + h1 + ul > li",
    index: 1,
    zh: '<em>2026.05</em>：我的论文 <strong>VLAGuard：面向无线传感器网络中视觉-语言-动作机器人物理注意力劫持评估与缓解的框架</strong> 被 AHSWN 期刊接收。',
  },
  {
    selector: "#news + h1 + ul > li",
    index: 2,
    zh: '<em>2026.05</em>：我的发明专利 <strong>基于语义嵌入和注意力双一致性的机器人控制方法、系统、终端及存储介质</strong> 已授权。专利号：ZL 2026 1 0211734.7。',
  },
  {
    selector: "#news + h1 + ul > li",
    index: 3,
    zh: '<em>2026.05</em>：我的发明专利 <strong>一种基于视觉语言动作模型的机器人控制方法、系统、终端及存储介质</strong> 已授权。专利号：ZL 2026 1 0219615.6。',
  },
  {
    selector: "#news + h1 + ul > li",
    index: 4,
    zh: '<em>2026.05</em>：我的发明专利 <strong>一种基于视觉语言模型的机器人操作方法、系统及终端</strong> 已授权。专利号：ZL 2026 1 0200293.0。',
  },
  {
    selector: "#achievements + h1 + h2 + ul > li",
    index: 0,
    zh: '<strong>结构感知鲁棒微调：防御视觉-语言-动作机器人中的物理注意力劫持</strong>。被 IROS 2026 接收。',
  },
  {
    selector: "#achievements + h1 + h2 + ul > li",
    index: 1,
    zh: '<strong>VLAGuard：面向无线传感器网络中视觉-语言-动作机器人物理注意力劫持评估与缓解的框架</strong>。被 AHSWN 接收。',
  },
  {
    selector: "#achievements + h1 + h2 + ul + h2 + ul > li",
    index: 0,
    zh: '<strong>基于语义嵌入和注意力双一致性的机器人控制方法、系统、终端及存储介质</strong>。已授权。专利号：ZL 2026 1 0211734.7。',
  },
  {
    selector: "#achievements + h1 + h2 + ul + h2 + ul > li",
    index: 1,
    zh: '<strong>一种基于视觉语言动作模型的机器人控制方法、系统、终端及存储介质</strong>。已授权。专利号：ZL 2026 1 0219615.6。',
  },
  {
    selector: "#achievements + h1 + h2 + ul + h2 + ul > li",
    index: 2,
    zh: '<strong>一种基于视觉语言模型的机器人操作方法、系统及终端</strong>。已授权。专利号：ZL 2026 1 0200293.0。',
  },
  {
    selector: "#achievements + h1 + h2 + ul + h2 + ul > li",
    index: 3,
    zh: '<strong>一种约束驱动轨迹生成方法、系统、终端及存储介质</strong>。状态：实质审查中。',
  },
  {
    selector: "#achievements + h1 + h2 + ul + h2 + ul > li",
    index: 4,
    zh: '<strong>一种柔性压力传感器及其制备方法</strong>。状态：实质审查中。',
  },
  {
    selector: "#achievements + h1 + h2 + ul + h2 + ul > li",
    index: 5,
    zh: '<strong>一种基于未来潜在表征一致性约束的视觉语言动作模型鲁棒训练方法</strong>。状态：初审中。',
  },
  {
    selector: ".patent-certificate-card figcaption",
    index: 0,
    zh: "专利证书 - ZL 2026 1 0211734.7",
  },
  {
    selector: ".patent-certificate-card figcaption",
    index: 1,
    zh: "专利证书 - ZL 2026 1 0219615.6",
  },
  {
    selector: ".patent-certificate-card figcaption",
    index: 2,
    zh: "专利证书 - ZL 2026 1 0200293.0",
  },
  {
    selector: ".paper-box-text",
    index: 0,
    zh: '<p><strong>结构感知鲁棒微调：防御视觉-语言-动作机器人中的物理注意力劫持</strong></p><p><strong>张锦权(Zhang Jinquan)</strong> 等</p><ul class="icon-list paper-points"><li data-icon="🔎">揭示 policy-critical action-to-vision attention hijacking 机制，即物理对抗补丁会将动作条件注意力从任务相关区域转移到局部补丁。</li><li data-icon="🧩">提出 AGSD，一种基于 EOT 优化的可打印补丁，同时劫持策略关键注意力并破坏视觉-语言语义对齐。</li><li data-icon="🛡️">提出 SARF，一种零推理额外开销的防御方法，仅微调视觉编码器，并结合特征锚定、注意力校正和语言引导的几何一致性。</li><li data-icon="📈">在 LIBERO adaptive AGSD 下，将 OpenVLA 平均失败率从 100.0% 降至 28.6%；在真实 PiPER 上将 AGSD 下平均成功率从 9.7% 恢复到 61.7%。</li></ul>',
  },
  {
    selector: ".paper-box-text",
    index: 1,
    zh: '<p><strong>VLAGuard：面向无线传感器网络中视觉-语言-动作机器人物理注意力劫持评估与缓解的框架</strong></p><p><strong>张锦权(Zhang Jinquan)</strong> 等</p><ul class="icon-list paper-points"><li data-icon="🛰️">研究 VLA 机器人作为 WSN 辅助智能环境中的移动边缘节点，并评估其面对物理对抗威胁时的鲁棒性。</li><li data-icon="🔎">提出 VASA，一种可打印补丁压力测试方法，通过策略关键注意力劫持干扰动作条件交叉注意力。</li><li data-icon="🛡️">提出 APFT，一种零推理额外开销的防御方法，用于稳定时空注意力并约束几何一致性。</li><li data-icon="📈">在 LIBERO 中将 OpenVLA 失败率从 100.0% 降至 25.9%，并在 2,000 次真实强补丁攻击实验中将成功率从 23.0% 提升到 67.4%。</li></ul>',
  },
  {
    selector: ".badge",
    index: 2,
    zh: "项目 2026",
  },
  {
    selector: ".paper-box-text",
    index: 2,
    zh: '<p><a href="https://github.com/jjjjqqqz101/aloha-pi05-lerobot">Aloha Pi0.5 LeRobot：真实机器人学习流水线</a></p><p><strong>张锦权(Zhang Jinquan)</strong></p><ul class="icon-list paper-points"><li data-icon="🧰">构建面向 AlohaMini 遥操作、LeRobot 格式数据集、数据清洗、Pi0.5 训练以及 4090 到 Orin 远程推理的端到端流程。</li><li data-icon="⚡">将 Orin 上的实时机器人 IO 与安全控制，与远程 GPU 服务器上的 VLA 策略推理解耦。</li><li data-icon="📚">提供可复现的真实机器人学习工程文档，同时避免公开私有数据集、路径、IP 或硬件标识。</li></ul>',
  },
  { selector: "#research-interests + h1 + ul > li", index: 0, zh: "<strong>机器人学习</strong>：数据驱动操作、真实机器人系统与闭环部署。" },
  { selector: "#research-interests + h1 + ul > li", index: 1, zh: "<strong>VLA</strong>：面向通用机器人操作的视觉-语言-动作策略。" },
  { selector: "#research-interests + h1 + ul > li", index: 2, zh: "<strong>WAM</strong>：面向动作感知具身预测与规划的世界动作模型。" },
  { selector: "#research-interests + h1 + ul > li", index: 3, zh: "<strong>后训练</strong>：将预训练机器人策略适配到下游任务与鲁棒性场景。" },
  { selector: "#research-interests + h1 + ul > li", index: 4, zh: "<strong>微调</strong>：面向具身模型的结构感知与参数高效适配。" },
  {
    selector: ".video-caption",
    index: 0,
    zh: '<p><strong>基于 FingerEye 的灵巧操作演示</strong></p><ul class="icon-list"><li data-icon="🧠">该工作基于 Roboscience 的 <strong>FingerEye</strong> 模型，并加入了我们面向真实机器人部署的算法改进。</li><li data-icon="🔁">在后训练阶段，我们发现将模型推理成功数据与人工遥操作数据混合训练，效果优于仅使用人工遥操作数据。</li><li data-icon="🏗️">基于这一发现，我们设计了自动收集模型推理成功数据集的架构。</li><li data-icon="⭐">我们结合人工评分与 Qwen 视觉语言模型评分，构建了数千条高质量真实机器人后训练数据。</li><li data-icon="📈">相比纯人工遥操作数据，混合数据训练使真实机器人推理成功率提升近 <strong>30%</strong>，验证了我们的设想。</li><li data-icon="🚀">我们正在加速整理该工作，希望在 arXiv 和 ICRA 2027 与大家交流真实机器人部署的稳定性与鲁棒性。</li></ul>',
  },
  {
    selector: ".video-caption",
    index: 1,
    zh: '<p><strong>松灵 PIPER 机械臂上的统一 Pi0.5 LoRA 演示</strong></p><ul class="icon-list"><li data-icon="🤖">该演示展示了同一个 Pi0.5 策略在松灵 PIPER 机械臂上经过真实机器人 LoRA 微调后的表现。</li><li data-icon="🧩">三个任务均由同一个 checkpoint 完成，强调跨任务一致性，而不是为每个任务切换专用模型。</li><li data-icon="🌊">我们同时对模型输出和机械臂执行进行了平滑处理，因为真实机器人不仅要追求任务成功率，也要关注动作的流畅性和稳定性。</li><li data-icon="🏠">我们的长期目标是让机器人走出实验室，在真实人类生活环境中自然、稳定地完成操作。</li></ul>',
  },
  {
    selector: ".video-caption",
    index: 2,
    zh: '<p><strong>Qwen + Flow-Matching VLA 泛化演示</strong></p><ul class="icon-list"><li data-icon="🧠">该演示探索了将 <strong>Qwen</strong> 视觉语言骨干与 <strong>Flow Matching 动作头</strong> 结合的 VLA 策略，用于连接高层语义理解与连续机器人控制。</li><li data-icon="🧪">我们首先在 LIBERO 中验证了整体框架的可行性，四个套件成功率均超过 <strong>90%</strong>，其中 Spatial 套件达到 <strong>97.6%</strong>。</li><li data-icon="🤝">我们进一步在真实 ALOHA 硬件上进行评估，并与原生 JAX 格式的 Pi0.5 模型进行了大量真实机器人对比实验。</li><li data-icon="🌈">在同类别但颜色未见过的物体、机器人相机视野中出现未见过干扰物以及不同背景条件下，Qwen + Flow Matching VLA 展现出更强的跨物体与跨背景泛化能力。</li><li data-icon="🚀">这些结果表明，更强的语义 grounding 与生成式动作建模，有助于推动 VLA 从仿真基准走向鲁棒真实操作。</li></ul>',
  },
  {
    selector: ".video-caption",
    index: 3,
    zh: '<p><strong>SARF：防御物理注意力劫持的鲁棒微调</strong></p><ul class="icon-list"><li data-icon="📄">该演示展示了我们 IROS 2026 工作 <strong>Structure-Aware Robust Fine-Tuning</strong>，用于防御 VLA 机器人中的物理注意力劫持。</li><li data-icon="🎯">我们识别了一种机制层面的脆弱性：可打印对抗补丁会将策略关键的 action-to-vision 注意力从任务相关区域转移到补丁上。</li><li data-icon="🧩">为压力测试该失效模式，AGSD 在真实变换下同时将动作条件注意力集中到补丁，并破坏视觉-语言语义对齐。</li><li data-icon="🛡️">SARF 仅微调视觉编码器，结合特征锚定、策略关键注意力校正和语言引导的几何一致性，在部署时不增加推理开销。</li><li data-icon="📊">在 LIBERO adaptive AGSD 下，SARF 将 OpenVLA 失败率从 <strong>100.0%</strong> 降至 Spatial/Object/Goal/Long 上的 <strong>17.0 / 14.2 / 26.5 / 56.8%</strong>，平均失败率为 <strong>28.6%</strong>，绝对下降 <strong>71.4</strong> 个百分点。</li><li data-icon="🤖">在真实 PiPER 平台上，AGSD 将平均成功率从 Clean 的 <strong>72.0%</strong> 降至 <strong>9.7%</strong>；SARF 将其恢复到 <strong>61.7%</strong>，pick-and-place、open-drawer 和 stack 的任务成功率分别为 <strong>74.0 / 63.0 / 58.0%</strong>。</li></ul>',
  },
  { selector: "#contact + h1 + ul > li", index: 0, zh: "邮箱：2410815010@mails.szu.edu.cn" },
  { selector: "#contact + h1 + ul > li", index: 1, zh: 'GitHub：<a href="https://github.com/jjjjqqqz101">https://github.com/jjjjqqqz101</a>' },
  { selector: "#contact + h1 + ul > li", index: 2, zh: '主页：<a href="https://jjjjqqqz101.github.io/">https://jjjjqqqz101.github.io/</a>' },
];

const attributeTranslationEntries = [
  { selector: "nav.greedy-nav", attribute: "aria-label", zh: "主导航" },
  { selector: ".sidebar", attribute: "aria-label", zh: "个人简介" },
  { selector: ".language-switcher__controls", attribute: "aria-label", zh: "语言切换" },
  { selector: ".patent-certificate-gallery", attribute: "aria-label", zh: "已授权专利证书" },
  { selector: ".patent-certificate-card img", index: 0, attribute: "alt", zh: "ZL 2026 1 0211734.7 专利证书" },
  { selector: ".patent-certificate-card img", index: 1, attribute: "alt", zh: "ZL 2026 1 0219615.6 专利证书" },
  { selector: ".patent-certificate-card img", index: 2, attribute: "alt", zh: "ZL 2026 1 0200293.0 专利证书" },
  { selector: "[data-carousel-prev]", attribute: "aria-label", zh: "上一个演示" },
  { selector: "[data-carousel-next]", attribute: "aria-label", zh: "下一个演示" },
];

const getTranslationTarget = (entry) => {
  const elements = document.querySelectorAll(entry.selector);
  return elements[entry.index ?? 0] || null;
};

const setStoredLanguage = (language) => {
  try {
    localStorage.setItem("homepage-language", language);
  } catch {
    // Local storage can be unavailable in strict privacy modes.
  }
};

const getStoredLanguage = () => {
  try {
    return localStorage.getItem("homepage-language");
  } catch {
    return null;
  }
};

const applyLanguage = (language, { persist = true } = {}) => {
  const activeLanguage = language === "zh" ? "zh" : "en";
  document.documentElement.lang = activeLanguage === "zh" ? "zh-CN" : "en";
  document.title = activeLanguage === "zh" ? "张锦权(Zhang Jinquan) - 个人主页" : "Zhang Jinquan(张锦权) - Homepage";

  translationEntries.forEach((entry) => {
    const element = getTranslationTarget(entry);
    if (!element) {
      return;
    }

    if (entry.original === undefined) {
      entry.original = element.innerHTML;
    }

    element.innerHTML = activeLanguage === "zh" ? entry.zh : entry.original;
  });

  attributeTranslationEntries.forEach((entry) => {
    const element = getTranslationTarget(entry);
    if (!element) {
      return;
    }

    if (entry.original === undefined) {
      entry.original = element.getAttribute(entry.attribute) || "";
    }

    element.setAttribute(entry.attribute, activeLanguage === "zh" ? entry.zh : entry.original);
  });

  document.querySelectorAll("[data-language-option]").forEach((button) => {
    const isActive = button.dataset.languageOption === activeLanguage;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  if (persist) {
    setStoredLanguage(activeLanguage);
  }
};

document.querySelectorAll("[data-language-option]").forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.languageOption);
  });
});

applyLanguage(getStoredLanguage() || "en", { persist: false });
