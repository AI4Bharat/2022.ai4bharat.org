---
blocks:
  - body: >
      # IndicGLUE


      ***


      To thoroughly evaluate language models on Indian languages, we need a
      robust NLU benchmark consisting of a wide variety of tasks and covering
      all the Indian languages. IndicGLUE is a natural language understanding
      benchmark that we propose. It consists of 6 tasks which we describe in the
      next section.


      In addition, we also compile a list of additional evaluations which
      comprises of tasks based on publicly-available datasets.
    _template: content
  - caption: Downloads
    markupTable: >-
      <table>

      <thead>

      <tr>

      <th>Dataset</th>

      <th>Download Link</th>

      </tr>

      </thead>

      <tbody>

      <tr>

      <td>Soham News Article Classification</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/soham-articles.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>iNLTK Headline Classification</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/inltk-headlines.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>BBC News Article Classification</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/bbc-articles.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>AI4Bharat Wikipedia Section Titles</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/wiki-section-titles.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>AI4Bharat Cloze-style Question Answering</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/wiki-cloze.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>AI4Bharat Winnograd Natural Language Inference</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/wnli-translated.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>AI4Bharat Choice of Plausible Alternatives</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/copa-translated.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>WikiAnnNER</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/wikiann-ner.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>CVIT-MKB Cross-lingual Sentence Retrieval</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/cvit-mkb.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>IITP Movie Reviews Sentiment</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/iitp-movie-reviews.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>IITP Product Reviews</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/iitp-product-reviews.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>ACTSA Sentiment Classifcation</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/actsa.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>MIDAS Discourse</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/evaluations/midas-discourse.tar.gz">link</a></td>

      </tr>

      <tr>

      <td>Amrita Paraphrase</td>

      <td><a href="https://nlp.amrita.edu/dpil_cen/index.html">link</a>
      <em>(need to request)</em></td>

      </tr>

      </tbody>

      </table>
    color: default
    _template: table
  - body: "**\n\nThe code to run evaluations on the above dataset is provided in the\_[IndicBERT repo](https://github.com/AI4Bharat/indic-bert). To find the source of each dataset, please refer the\_[citations](https://indicnlp.ai4bharat.org/indic-glue/#citations).\n\n### Tasks\n\n#### News Category Classification\n\nPredict the genre of a given news article. The dataset contains around 125k news articles across 9 Indian languages. Example:\n\n*Article Snippet*:\n\n```\nகர்நாடக சட்டப் பேரவையில் வெற்றி பெற்ற எம்எல்ஏக்கள் இன்று பதவியேற்றுக் கொண்ட நிலையில் , காங்கிரஸ் எம்எல்ஏ ஆனந்த் சிங் க்கள் ஆப்சென்ட் ஆகி அதிர்ச்சியை ஏற்படுத்தியுள்ளார் . உச்சநீதிமன்ற உத்தரவுப்படி இன்று மாலை முதலமைச்சர் எடியூரப்பா இன்று நம்பிக்கை வாக்கெடுப்பு நடத்தி பெரும்பான்மையை நிரூபிக்க உச்சநீதிமன்றம் உத்தரவிட்டது . \r\n\n```\n\n*Category*: Politics\n\n*Datasets*\n\n*   AI4Bharat\n*   Soham Articles Genre Classification\n*   iNLTK Headlines Genre Classifcation\n*   BBC News Articles\n\n***\n\n#### Headline Prediction\n\nPredict the correct headline for a news article from a given list of four candidate headlines. The dataset contains around 880k examples across 11 Indian languages. Example:\n\n*News Article:*\n\n```\n ರಾಷ್ಟ್ರೀಯ\\nಪುಣೆ: 23 ವರ್ಷದ ಇನ್ಫೋಸಿಸ್ ಮಹಿಳಾ ಟೆಕ್ಕಿಯೊಬ್ಬರನ್ನು ನಡು ರಸ್ತೆಯಲ್ಲಿಯೇ ಮಾರಾಕಾಸ್ತ್ರಗಳಿಂದ ಬರ್ಬರವಾಗಿ ಹತ್ಯೆ ಮಾಡಿರುವ ಘಟನೆ ಪುಣೆಯಲ್ಲಿ ಶನಿವಾರ ರಾತ್ರಿ ನಡೆದಿದೆ.\\nಅಂತರ ದಾಸ್ ಕೊಲೆಯಾದ ಮಹಿಳಾ ಟೆಕ್ಕಿಯಾಗಿದ್ದಾರೆ. ಅಂತರಾ ಅವರು ಪಶ್ಚಿಮ ಬಂಗಾಳದ ಮೂಲದವರಾಗಿದ್ದಾರೆ. ಕಳೆದ ರಾತ್ರಿ 8.00 ಗಂಟೆ ಸುಮಾರಿಗೆ ಕೆಲಸ ಮುಗಿಸಿ ಮನೆಗೆ ತೆರಳುತ್ತಿದ್ದ ಸಂದರ್ಭದಲ್ಲಿ ಅಂತರಾ ಅವರ ಮೇಲೆ ದಾಳಿ ಮಾಡಿರುವ ದುಷ್ಕರ್ಮಿಗಳು ಮಾರಾಕಾಸ್ತ್ರಗಳಿಂದ ಹಲ್ಲೆ ನಡೆಸಿದ್ದಾರೆಂದು ಪೊಲೀಸರು ಹೇಳಿದ್ದಾರೆ.\\nದಾಳಿ ನಡೆಸಿದ ನಂತರ ರಕ್ತದ ಮಡುವಿನಲ್ಲಿ ಬಿದ್ದು ಒದ್ದಾಡುತ್ತಿದ್ದ ಅಂತರಾ ಅವರನ್ನು ಸ್ಥಳೀಯರು ಆಸ್ಪತ್ರೆಗೆ ದಾಳಸಿದ್ದಾರೆ. ಆದರೆ, ಆಸ್ಪತ್ರೆಗೆ ದಾಖಲಿಸುವಷ್ಟರಲ್ಲಿ ಅಂತರಾ ಅವರು ಸಾವನ್ನಪ್ಪಿದ್ದಾರೆಂದು ಅವರು ಹೇಳಿದ್ದಾರೆ.\\nಪ್ರಕರಣ ದಾಖಲಿಸಿಕೊಂಡಿರುವ ಪೊಲೀಸರು ತನಿಖೆ ಆರಂಭಿಸಿದ್ದಾರೆ\",\r\n\n```\n\n*   *Candidate 1*: ಇನ್ಫೋಸಿಸ್ ಮಹಿಳಾ ಟೆಕ್ಕಿಯ ಬರ್ಬರ ಹತ್ಯೆ\_*\\[correct answer]*\n*   *Candidate 2:*\_ಮಾನಸಿಕ ಅಸ್ವಸ್ಥೆ ಮೇಲೆ ಮಕ್ಕಳ ಕಳ್ಳಿ ಎಂದು ಭೀಕರ ಹಲ್ಲೆ\n*   *Candidate 3:*\_ಕಸಬ ಬೆಂಗ್ರೆಯಲ್ಲಿ ಮುಸುಕುಧಾರಿಗಳ ತಂಡದಿಂದ ಮೂವರು ಯುವಕರ ಮೇಲೆ ಹಲ್ಲೆ : ಓರ್ವ ಗಂಭೀರ\n*   *Candidate 4:*\_ಕಣಿವೆ ರಾಜ್ಯದಲ್ಲಿ mobile ಬಂದ್, ಪ್ರಿಂಟಿಂಗ್ ಪ್ರೆಸ್ ಮೇಲೆ ದಾಳಿ\n\n*Datasets*\n\n*   AI4Bharat\n\n***\n\n#### Wikipedia Section Title Prediction\n\nPredict the correct title for a Wikipedia section from a given list of four candidate titles. The dataset has 400k examples across 11 Indian languages.\n\n*Section Text*:\n\n```\n2005માં, જેકમેન નિર્માણ કંપની, સીડ પ્રોડકશન્સ ઊભી કરવા તેના લાંબાસમયના મદદનીશ જહોન પાલેર્મો સાથે જોડાયા, જેમનો પ્રથમ પ્રોજેકટ 2007માં વિવા લાફલિન હતો. જેકમેનની અભિનેત્રી પત્ની ડેબોરા-લી ફર્નેસ પણ કંપનીમાં જોડાઈ, અને પાલેર્મોએ પોતાના, ફર્નેસ અને જેકમેન માટે “ યુનિટી ” અર્થવાળા લખાણની આ ત્રણ વીંટીઓ બનાવી.[૨૭] ત્રણેયના સહયોગ અંગે જેકમેને જણાવ્યું કે “ મારી જિંદગીમાં જેમની સાથે મેં કામ કર્યું તે ભાગીદારો અંગે ડેબ અને જહોન પાલેર્મો અંગે હું ખૂબ નસીબદાર છું. ખરેખર તેથી કામ થયું. અમારી પાસે જુદું જુદું સાર્મથ્ય હતું. હું તે પસંદ કરતો હતો. I love it. તે ખૂબ ઉત્તેજક છે. ”[૨૮]ફોકસ આધારિત સીડ લેબલ, આમન્ડા સ્કિવેઈટઝર, કેથરિન ટેમ્બલિન, એલન મંડેલબમ અને જોય મરિનો તેમજ સાથે સિડની આધારિત નિર્માણ કચેરીનું સંચાલન કરનાર અલાના ફ્રીનો સમાવેશ થતાં કદમાં વિસ્તૃત બની. આ કંપીનોનો ઉદ્દેશ જેકમેનના વતનના દેશની સ્થાનિક પ્રતિભાને કામે લેવા મધ્યમ બજેટવાળી ફિલ્મો બનાવવાનો છે. \r\n\n```\n\n*   *Candidate 1:*\_એકસ-મેન\n*   *Candidate 2:*\_કારકીર્દિ\n*   *Candidate 3:*\_નિર્માણ કંપન \\[*correct answer*]\n*   *Candidate 4:*\_ઓસ્ટ્રેલિય\n\n*Datasets*\n\n*   AI4Bharat\n\n***\n\n#### Cloze-style Question Answering\n\nGiven a text with an entity randomly masked, the task is to predict that masked entity from a list of 4 candidate entities. The dataset contains around 239k examples across 11 languages. Example:\n\n*Text*\n\n```\nਹੋਮੀ ਭਾਬਾ ਦਾ ਜਨਮ 1949 ਈ ਨੂਂ ਮੁੰਬਈ ਵਿੱਚ ਪਾਰਸੀ ਪਰਿਵਾਰ ਵਿੱਚ ਹੋਇਆ । ਸੇਂਟ ਮੇਰੀ ਤੋਂ ਮੁਢਲੀ ਸਿਖਿਆ ਪ੍ਰਾਪਤ ਕਰਕੇ ਉਹ ਬੰਬੇ ਯੂਨੀਵਰਸਿਟੀ ਗ੍ਰੈਜੁਏਸ਼ਨ ਲਈ ਚਲਾ ਗਿਆ । ਇਸ ਤੋਂ ਬਾਅਦ ਉਹ ਉਚੇਰੀ ਸਿਖਿਆ ਲਈ <MASK> ਚਲਾ ਗਿਆ । ਉਸਨੇ ਓਥੇ ਆਕਸਫੋਰਡ ਯੂਨੀਵਰਸਿਟੀ ਤੋਂ ਐਮ.ਏ ਅਤੇ ਐਮ ਫਿਲ ਦੀਆਂ ਡਿਗਰੀਆਂ ਪ੍ਰਾਪਤ ਕੀਤੀਆਂ । ਤਕਰੀਬਨ ਦਸ ਸਾਲ ਤਕ ਉਸਨੇ ਸੁਸੈਕਸ ਯੂਨੀਵਰਸਿਟੀ ਦੇ ਅੰਗਰੇਜ਼ੀ ਵਿਭਾਗ ਵਿੱਚ ਬਤੌਰ ਲੈਕਚਰਾਰ ਕਾਰਜ ਨਿਭਾਇਆ । ਇਸਤੋਂ ਇਲਾਵਾ ਹੋਮੀ ਭਾਬਾ ਪੈਨਸੁਲਵੇਨਿਆ , ਸ਼ਿਕਾਗੋ ਅਤੇ ਅਮਰੀਕਾ ਦੀ ਹਾਰਵਰਡ ਯੂਨੀਵਰਸਿਟੀ ਵਿੱਚ ਵੀ ਪ੍ਰੋਫ਼ੇਸਰ ਦੇ ਆਹੁਦੇ ਤੇ ਰਿਹਾ ।\r\n\n```\n\n*   *Candidate 1*: ਬਰਤਾਨੀਆ\_*\\[correct answer]*\n*   *Candidate 2*: ਭਾਰਤ\n*   *Candidate 3*: ਸ਼ਿਕਾਗੋ\n*   *Candidate 4*: ਪਾਕਿਸਤਾਨ\n\n*Datasets*\n\n*   AI4Bharat\n\n***\n\n#### Named Entity Recognition\n\nRecognize entities and their coarse types in a sequence of words. The dataset contains around 787k examples across 11 Indian languages.\n\n*Example*:\n\n**Token**चाणक्यपुरीकोयहाँदेखनेहेतुयहाँक्लिककरें**Type**B-LOCI-LOCOOOOOOO\n\n*Datasets*\n\n*   WikiAnnNER\n\n***\n\n#### Cross-lingual Sentence Retrieval\n\nGiven a sentence in language $L\\_1$ the task is to retrieve its translation from a set of candidate sentences in language $L\\_2$. The dataset contains around 39k parallel sentence pairs across 8 Indian languages. Example:\n\n*Input Sentence*\n\n```\nIn the health sector the nation has now moved ahead from the conventional approach.\r\n\n```\n\n*Retrieve the following translation from a set of 4886 sentences:*\n\n```\nആരോഗ്യമേഖലയില് ഇന്ന് രാജ്യം പരമ്പരാഗത രീതികളില് നിന്ന് മുന്നേറിക്കഴിഞ്ഞു.\r\n\n```\n\n*Datasets*\n\n*   CVIT-Mann ki baat test set\n\n***\n\n#### Natural Language Inference\n\n*Datasets*\n\n*   AI4Bharat Winnograd Natural Language Inference (WNLI)\n*   AI4Bharat Choice of Plausible Alternatives (COPA)\n\nThese are translations of the WNLI and COPA datasets into some Indian languages.\n\n***\n\n#### Sentiment Analysis\n\n*Datasets*\n\n*   IITP Movie Reviews Sentiment\n*   IITP Product Reviews\n*   ACTSA Sentiment Classifcation\n\n***\n\n#### Discourse Analysis\n\n*Datasets*\n\n*   MIDAS Discourse\n\n***\n\n#### Paraphrase Detection\n\n*Datasets*\n\n*   Amrita Exact Paraphrase Detection\n*   Amrita Rough Paraphrase Detection\n\n***\n\n### Citing\n\nIf you are using IndicGLUE, please cite the following article:\n\n```\n@inproceedings{kakwani2020indicnlpsuite,\r\n    title={{IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages}},\r\n    author={Divyanshu Kakwani and Anoop Kunchukuttan and Satish Golla and Gokul N.C. and Avik Bhattacharyya and Mitesh M. Khapra and Pratyush Kumar},\r\n    year={2020},\r\n    booktitle={Findings of EMNLP},\r\n}\r\n\n```\n\nIf you are using IndicGLUE and additional evaluation datasets in your work, then we request you to use the following detailed citation text so that the original authors of the datasets also get credit for their work. As more authors contribute to this benchmark we will add their references also to the below text.\n\nWe use the IndicGLUE dataset\_`\\cite{kakwani2020indicnlpsuite}`\_which is an evaluation benchmark containing datasets for NLU tasks in Indian languages. Some of these datasets were built from Wikipidea and IndicCorp\_`\\cite{kakwani2020indicnlpsuite}`. In addition, it also contains other publicly available datasets for cross-lingual similarity\_`\\cite{siripragrada-etal-2020-multilingual}`, named entity recognition\_`\\cite{pan-etal-2017-cross}`, paraphrase detection\_`\\cite{Kumar2016DPILFIRE2016OO}`, discourse analysis\_`\\cite{Dhanwal2020AnAD}`, sentiment analysis\_`\\cite{cicling/Akhtar16}`,\_`\\cite{DBLP:conf/coling/Akhtar0EB16}`,\_`\\cite{mukku-mamidi-2017-actsa}`\_and genre classification\_`\\footnote{https://github.com/goru001/inltk}`\_`\\footnote{https://www.kaggle.com/csoham/classification-bengali-news-articles-indicnlp}`\_`\\footnote{https://github.com/NirantK/hindi2vec/releases/tag/bbc-hindi-v0.1}`. It also contains translations of the original WNLI\_`\\cite{Levesque2011TheWS}`\_and COPA\_`\\cite{Gordon2011SemEval2012T7}`\_datasets in 3 Indian languages.\n\nThe bibtex entries for the above sources is available\_[here](https://indicnlp.ai4bharat.org/papers/indic-glue.bib).\n"
    _template: content
---

