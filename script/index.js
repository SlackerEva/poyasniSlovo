export {objHtmlElements, initialSenders, mailBox, dictionary, deleteMail, archivemail, errors, answer} from './data/data.js';
export {getRandInt} from './api/getRandomInt.js';
export {swapElementArray, swapElementRestore, swapElementAnswer} from './api/swapElementArray.js';
export {Letter, initialLetters} from './letter/letter.js';
export {Word, addWord, idSet} from './word/word.js';
export {poems, loadPoems} from './api/loadPoems.js';
export {getSearchListDefineWords, getDefineWikiSite, getDefine} from './api/wikiApi.js';
export {enableValidation} from './validation/authorization.js';

export {renderStartPage} from './render/renderStartPage.js';
export {renderMenu} from './render/renderMenu.js';
export {renderMailBox} from './render/renderMailBox.js';
export {renderDictionary} from './render/renderDictionary.js';
export {renderLetter, renderLetters} from './render/renderLetter.js';
export {renderWord, renderWords} from './render/renderWord.js';
export {renderMessage} from './render/renderMessage.js';
export {clearContent, clearAll, clearPage, setContent} from './render/renderContent.js';
export {renderPopup, renderPopupAnswer, renderPopupHint} from './render/renderPopup.js';
export {renderPageRule} from './render/renderPageRule.js';
export {renderPagePrivacyPolicy} from './render/renderPagePrivacyPolicy.js';
export {renderErrorPage} from './render/renderErrorPage.js';
export {renderAuthorizationpage} from './render/renderAuthorizationpage.js';

export {clickHandlerLetter} from './handlers/clickHandlerLetter.js';
export {clickHandlerSidebar, arrayTarget} from './handlers/clickHandlerSidebar.js';
export {clickHandelerWord} from './handlers/clickHandlerWord.js';
export {inputHandlerMenu} from './handlers/inputHandlerMenu.js';
export {clickHandlerMenuCheckbox, clickHandlerMenuBtn, clickHandlerMenuBtnAnswer, clickHandlerMenuBtnmenuBtnRestore} from './handlers/clickHandlerMenu.js';
export {clickHandlerFooterMenu} from './handlers/clickHandlerFooterMenu.js';
export {clickHundlerBtnAnswer} from './handlers/clickHundlerBtnAnswer.js';



