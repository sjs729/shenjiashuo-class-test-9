/**
 * 作者：申家硕
 * 建立时间：2026-11-02
 * 使用模型：DeepSeek-V4.1-Flash
 * 功能名称：新闻选项卡切换
 * 简介：为带 data-sjs-tabs 的容器提供三个新闻栏目的切换；切换时先清除全部选中状态，再设置当前项。
 */
(function () {
    "use strict";

    /**
     * 切换选项卡
     * 功能：先清除所有选项卡的选中样式与 aria-selected，再为当前项设置选中状态并显示对应面板
     * @param {HTMLElement} sjs_root 选项卡容器
     * @param {string} sjs_key 目标栏目标识，对应 data-sjs-tab 的值
     * @returns {void}
     */
    function sjs_activateTab(sjs_root, sjs_key) {
        var sjs_tabs = sjs_root.querySelectorAll(".sjs_tab");
        var sjs_panels = sjs_root.querySelectorAll(".sjs_panel");

        // 第一步：清除所有选项卡的选中状态
        sjs_tabs.forEach(function (sjs_tabItem) {
            sjs_tabItem.classList.remove("sjs_is_active");
            sjs_tabItem.setAttribute("aria-selected", "false");
            sjs_tabItem.tabIndex = -1;
        });

        // 同步隐藏全部面板，保证任何时刻只显示一栏
        sjs_panels.forEach(function (sjs_panelItem) {
            sjs_panelItem.hidden = true;
        });

        // 第二步：设置当前选项卡的选中状态
        var sjs_targetTab = sjs_root.querySelector('.sjs_tab[data-sjs-tab="' + sjs_key + '"]');
        var sjs_targetPanel = sjs_root.querySelector('.sjs_panel[data-sjs-panel="' + sjs_key + '"]');

        if (!sjs_targetTab || !sjs_targetPanel) {
            return;
        }

        sjs_targetTab.classList.add("sjs_is_active");
        sjs_targetTab.setAttribute("aria-selected", "true");
        sjs_targetTab.tabIndex = 0;

        sjs_targetPanel.hidden = false;
    }

    /**
     * 初始化选项卡
     * 功能：绑定按钮点击事件，并在加载时激活默认项
     * @param {HTMLElement} sjs_root 选项卡容器
     * @returns {void}
     */
    function sjs_initTabs(sjs_root) {
        var sjs_tabs = sjs_root.querySelectorAll(".sjs_tab");

        // 事件监听：点击标签后切换到对应栏目
        sjs_tabs.forEach(function (sjs_tabItem) {
            sjs_tabItem.addEventListener("click", function () {
                sjs_activateTab(sjs_root, sjs_tabItem.dataset.sjsTab);
            });
        });

        // 默认项：读取 HTML 中带 sjs_is_active 的按钮，没有则取第一项
        var sjs_defaultTab = sjs_root.querySelector(".sjs_tab.sjs_is_active") || sjs_tabs[0];

        if (sjs_defaultTab) {
            sjs_activateTab(sjs_root, sjs_defaultTab.dataset.sjsTab);
        }
    }

    // 自动初始化页面上所有带 data-sjs-tabs 的容器
    document.querySelectorAll("[data-sjs-tabs]").forEach(function (sjs_rootItem) {
        sjs_initTabs(sjs_rootItem);
    });
})();
