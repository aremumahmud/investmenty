// TranslateDropdown.js
import React, { useState, useEffect } from 'react';
import translateText from '../utils/translate';
import languages from '../utils/languages';




const translateAllTextNodes = async (targetLanguage, from) => {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);
  const textNodes = [];

  while (walker.nextNode()) {
    if (!walker.currentNode.parentElement.closest('[data-no-translate]')) {
        textNodes.push(walker.currentNode);
      }
  }

  for (let node of textNodes) {
    const translatedText = await translateText(node.nodeValue, targetLanguage, from);
    node.nodeValue = translatedText;
  }
};

const TranslateDropdown = ({setmehome}) => {
  const [prevSelectedLanguage , setPrevSelectedLanguage] = useState('en')
  const [selectedLanguage, setSelectedLanguage] = useState('en');
 

  useEffect(() => {
    
      translateAllTextNodes(selectedLanguage , prevSelectedLanguage);
      setPrevSelectedLanguage(selectedLanguage)
      setmehome && setmehome(selectedLanguage , prevSelectedLanguage)
    
  }, [selectedLanguage]);

  return (
    <div>
      <label htmlFor="language-select">Choose language: </label>
      <select
      data-no-translate
        id="language-select"
        value={selectedLanguage}
        onChange={(e) => setSelectedLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TranslateDropdown;
