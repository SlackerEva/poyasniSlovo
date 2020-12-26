import {renderAuthorizationpage, renderStartPage, objHtmlElements} from '../index.js'

if(!localStorage.getItem('test') == '1' || !localStorage.getItem('test') == null) {
    renderAuthorizationpage(objHtmlElements);
    // window.location.replace('authorization.html');
} else {
    renderStartPage(objHtmlElements);
}