import {renderAuthorizationpage, renderStartPage, objHtmlElements} from '../index.js'

if(!localStorage.getItem('test') == '1' || !localStorage.getItem('test') == null) {
    renderAuthorizationpage(objHtmlElements);
} else {
    renderStartPage(objHtmlElements);
}