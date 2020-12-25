import {renderPageRule, renderPagePrivacyPolicy, renderErrorPage} from '../index.js'

export function clickHandlerFooterMenu(evt, objHtmlElements) {

  if(evt.target.closest(objHtmlElements.footerHelp)) {
    renderErrorPage(objHtmlElements);
  }

  if(evt.target.closest(objHtmlElements.footerRule)) {
    renderPageRule(objHtmlElements);
  }

  if(evt.target.closest(objHtmlElements.footerPrivacyPolicy)) {
    renderPagePrivacyPolicy(objHtmlElements);
  }
}