(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function renderSectionTitle(title) {
    return '<h2 class="section-title">' + escapeHtml(title) + '</h2>';
  }

  function normalizeLink(value) {
    if (typeof value !== "string") {
      return "";
    }

    var href = value.trim();

    if (!href) {
      return "";
    }

    if (/^(https?:|mailto:|tel:)/i.test(href)) {
      return href;
    }

    return "";
  }

  function renderContactChip(contact) {
    var isObject = contact && typeof contact === "object";
    var text = isObject
      ? [contact.label, contact.value].filter(Boolean).join(" · ")
      : String(contact || "");
    var href = isObject ? normalizeLink(contact.href) : "";

    if (!href) {
      return '<span class="chip">' + escapeHtml(text) + '</span>';
    }

    return [
      '<a class="chip chip-link" href="' + escapeHtml(href) + '"' + (/^https?:/i.test(href) ? ' target="_blank" rel="noreferrer"' : '') + '>',
      escapeHtml(text),
      '</a>'
    ].join("");
  }

  function renderBulletList(items, className) {
    return [
      '<ul class="' + className + '">',
      items.map(function (item) {
        return '<li>' + escapeHtml(item) + '</li>';
      }).join(""),
      '</ul>'
    ].join("");
  }

  function renderHero(basics) {
    return [
      '<header class="hero">',
      '  <div class="hero-copy">',
      '    <span class="eyebrow">' + escapeHtml(basics.badge) + '</span>',
      '    <h1>' + escapeHtml(basics.name) + '</h1>',
      '    <p class="title">' + escapeHtml(basics.title) + '</p>',
      '    <p class="summary">' + escapeHtml(basics.summary) + '</p>',
      '    <div class="contact-grid">',
      basics.contacts.map(function (contact) {
        return '      ' + renderContactChip(contact);
      }).join(""),
      '    </div>',
      '  </div>',
      '  <div class="hero-side">',
      basics.stats.map(function (stat) {
        return [
          '    <div class="stat-card">',
          '      <span class="stat-label">' + escapeHtml(stat.label) + '</span>',
          '      <span class="stat-value">' + escapeHtml(stat.value) + '</span>',
          '      <span class="muted">' + escapeHtml(stat.detail) + '</span>',
          '    </div>'
        ].join("");
      }).join(""),
      '  </div>',
      '</header>'
    ].join("");
  }

  function renderProfileSection(profile) {
    return [
      '<section class="section">',
      renderSectionTitle(profile.title),
      '  <div class="intro-card">',
      '    <ul class="meta-list">',
      profile.items.map(function (item) {
        return [
          '      <li>',
          '        <span class="meta-label">' + escapeHtml(item.label) + '</span>',
          '        ' + escapeHtml(item.value),
          '      </li>'
        ].join("");
      }).join(""),
      '    </ul>',
      '  </div>',
      '</section>'
    ].join("");
  }

  function renderSkillsSection(skills) {
    return [
      '<section class="section">',
      renderSectionTitle(skills.title),
      skills.items.map(function (item) {
        return [
          '  <div class="skill-block">',
          '    <h3>' + escapeHtml(item.name) + '</h3>',
          '    <div class="skill-bar"><span style="width: ' + Number(item.level) + '%"></span></div>',
          '    <p class="muted">' + escapeHtml(item.description) + '</p>',
          '  </div>'
        ].join("");
      }).join(""),
      '</section>'
    ].join("");
  }

  function renderKeywordSection(keywords) {
    return [
      '<section class="section">',
      renderSectionTitle(keywords.title),
      '  <ul class="tag-list">',
      keywords.items.map(function (item) {
        return '<li>' + escapeHtml(item) + '</li>';
      }).join(""),
      '  </ul>',
      '</section>'
    ].join("");
  }

  function renderEducationSection(education) {
    return [
      '<section class="section">',
      renderSectionTitle(education.title),
      education.items.map(function (item) {
        return [
          '  <div class="edu-card">',
          '    <h3>' + escapeHtml(item.school) + '</h3>',
          '    <p class="muted">' + escapeHtml(item.major) + '</p>',
          '    <p class="muted">' + escapeHtml(item.period) + '</p>',
          '  </div>'
        ].join("");
      }).join(""),
      '</section>'
    ].join("");
  }

  function renderExtrasSection(extras) {
    return [
      '<section class="section">',
      renderSectionTitle(extras.title),
      renderBulletList(extras.items, 'certificate-list'),
      '</section>'
    ].join("");
  }

  function renderTimelineSection(sectionData) {
    if (!sectionData || !Array.isArray(sectionData.items) || sectionData.items.length === 0) {
      return "";
    }

    return [
      '<section class="section">',
      renderSectionTitle(sectionData.title),
      '  <div class="timeline">',
      sectionData.items.map(function (item) {
        var heading = item.company || item.heading || "";
        var subheading = item.role || item.subheading || "";
        var points = Array.isArray(item.points) ? item.points : [];
        var detailLines = [
          '    <article class="timeline-item">',
          '      <div class="timeline-head">',
          '        <div>',
          '          <h3>' + escapeHtml(heading) + '</h3>'
        ];

        if (subheading) {
          detailLines.push('          <div class="role-line">' + escapeHtml(subheading) + '</div>');
        }

        detailLines.push(
          '        </div>',
          '        <span class="time-badge">' + escapeHtml(item.period || "") + '</span>',
          '      </div>'
        );

        if (points.length > 0) {
          detailLines.push(renderBulletList(points, 'bullet-list'));
        }

        detailLines.push('    </article>');

        return detailLines.join("");
      }).join(""),
      '  </div>',
      '</section>'
    ].join("");
  }

  function renderBulletSection(sectionData) {
    if (!sectionData || !Array.isArray(sectionData.items) || sectionData.items.length === 0) {
      return "";
    }

    return [
      '<section class="section">',
      renderSectionTitle(sectionData.title),
      '  <div class="intro-card">',
      renderBulletList(sectionData.items, 'bullet-list'),
      '  </div>',
      '</section>'
    ].join("");
  }

  function renderProjectsSection(sectionData) {
    if (!sectionData || !Array.isArray(sectionData.items) || sectionData.items.length === 0) {
      return "";
    }

    return [
      '<section class="section">',
      renderSectionTitle(sectionData.title),
      '  <div class="projects">',
      sectionData.items.map(function (item) {
        return [
          '    <article class="project-item">',
          '      <div class="project-head">',
          '        <div>',
          '          <h3>' + escapeHtml(item.name) + '</h3>',
          '          <p class="role-line">' + escapeHtml(item.stack) + '</p>',
          '        </div>',
          '        <span class="time-badge">' + escapeHtml(item.badge) + '</span>',
          '      </div>',
          renderBulletList(item.points, 'project-points'),
          '    </article>'
        ].join("");
      }).join(""),
      '  </div>',
      '</section>'
    ].join("");
  }

  function renderQuoteSection(sectionData) {
    if (!sectionData || !sectionData.content) {
      return "";
    }

    return [
      '<section class="section">',
      renderSectionTitle(sectionData.title),
      '  <div class="quote">' + escapeHtml(sectionData.content) + '</div>',
      '</section>'
    ].join("");
  }

  function renderAdditionalSection(sectionData) {
    if (!sectionData || !sectionData.type) {
      return "";
    }

    if (sectionData.type === 'timeline') {
      return renderTimelineSection(sectionData);
    }

    if (sectionData.type === 'bullet') {
      return renderBulletSection(sectionData);
    }

    if (sectionData.type === 'quote') {
      return renderQuoteSection(sectionData);
    }

    return "";
  }

  function renderSidebar(sidebar) {
    return [
      '<aside class="sidebar">',
      renderProfileSection(sidebar.profile),
      renderSkillsSection(sidebar.skills),
      renderKeywordSection(sidebar.keywords),
      renderEducationSection(sidebar.education),
      renderExtrasSection(sidebar.extras),
      '</aside>'
    ].join("");
  }

  function renderMain(main) {
    return [
      '<div class="content">',
      renderTimelineSection(main.experience),
      (main.additionalSections || []).map(renderAdditionalSection).join(""),
      renderProjectsSection(main.projects),
      renderQuoteSection(main.selfReview),
      '</div>'
    ].join("");
  }

  function renderResume(data) {
    return [
      renderHero(data.basics),
      '<section class="layout">',
      renderSidebar(data.sidebar),
      renderMain(data.main),
      '</section>',
      '<p class="footer-note">' + escapeHtml(data.footerNote) + '</p>'
    ].join("");
  }

  window.ResumeApp = window.ResumeApp || {};
  window.ResumeApp.templates = {
    renderResume: renderResume
  };
})();