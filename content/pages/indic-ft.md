---
blocks:
  - body: "# IndicFT\n\n***\n\n[fastText](https://fasttext.cc/)\_is a subword-aware word embedding model. It is particularly well-suited for Indian languages due to their highly agglutinative morphology. We train fastText models on our IndicNLP Corpora and evaluate them on a set of tasks to measure its performance.\n\nOur fastText models are available for 11 Indian languages: Assamese, Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Oriya, Punjabi, Tamil, Telugu.\n\n### Usage\n\nTo use our fastText models, first\_[download them](https://indicnlp.ai4bharat.org/indicft/#downloads). Next, install the fastText library:\n\n```\npip3 install fasttext\n\n```\n\nand then load the models like this:\n\n```\nimport fasttext\nmodel = fasttext.load_model(path_to_binary_file)\n\n```\n\nFor instructions on how to use these models, please refer to the official\_[fastText documentation](https://fasttext.cc/docs/en/support.html)\n\n### Downloads\n"
    _template: content
  - markupTable: >-
      <table>

      <thead>

      <tr>

      <th>Language</th>

      <th>as</th>

      <th>pa</th>

      <th>hi</th>

      <th>bn</th>

      <th>or</th>

      <th>gu</th>

      <th>mr</th>

      <th>kn</th>

      <th>te</th>

      <th>ml</th>

      <th>ta</th>

      </tr>

      </thead>

      <tbody>

      <tr>

      <td>Vectors</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.as.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.pa.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.hi.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.bn.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.or.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.gu.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.mr.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.kn.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.te.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.ml.300.vec">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.ta.300.vec">link</a></td>

      </tr>

      <tr>

      <td>Model</td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.as.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.pa.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.hi.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.bn.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.or.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.gu.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.mr.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.kn.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.te.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.ml.300.bin">link</a></td>

      <td><a
      href="https://storage.googleapis.com/ai4bharat-public-indic-nlp-corpora/embedding-v2/indicnlp.ft.ta.300.bin">link</a></td>

      </tr>

      </tbody>

      </table>
    color: default
    _template: table
  - body: "### Evaluation\n\nFor a full results of evaluation, check our\_[paper](https://indicnlp.ai4bharat.org/papers/arxiv2020\\_indicnlp\\_corpus.pdf). Here, we show some of the evaluations.\n\n#### Word Similarity\n"
    _template: content
  - markupTable: |-
      <table>
      <thead>
      <tr>
      <th>Language</th>
      <th>fastText wiki</th>
      <th>fastText wiki+CC</th>
      <th>Indic fastText</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>pa</td>
      <td>0.467</td>
      <td>0.384</td>
      <td><strong>0.445</strong></td>
      </tr>
      <tr>
      <td>hi</td>
      <td>0.575</td>
      <td>0.551</td>
      <td><strong>0.598</strong></td>
      </tr>
      <tr>
      <td>gu</td>
      <td>0.507</td>
      <td>0.521</td>
      <td><strong>0.600</strong></td>
      </tr>
      <tr>
      <td>mr</td>
      <td>0.497</td>
      <td><strong>0.544</strong></td>
      <td>0.509</td>
      </tr>
      <tr>
      <td>te</td>
      <td>0.559</td>
      <td>0.543</td>
      <td><strong>0.578</strong></td>
      </tr>
      <tr>
      <td>ta</td>
      <td><strong>0.439</strong></td>
      <td>0.438</td>
      <td>0.422</td>
      </tr>
      <tr>
      <td>Average</td>
      <td>0.507</td>
      <td>0.497</td>
      <td><strong>0.525</strong></td>
      </tr>
      </tbody>
      </table>
    color: default
    _template: table
  - body: |
      #### News Genre Classification
    _template: content
  - markupTable: |-
      <table>
      <thead>
      <tr>
      <th>Language</th>
      <th>fastText wiki</th>
      <th>fastText wiki+CC</th>
      <th>Indic fastText</th>
      </tr>
      </thead>
      <tbody>
      <tr>
      <td>pa</td>
      <td><strong>97.12</strong></td>
      <td>95.53</td>
      <td>96.47</td>
      </tr>
      <tr>
      <td>bn</td>
      <td>96.57</td>
      <td>97.57</td>
      <td><strong>97.71</strong></td>
      </tr>
      <tr>
      <td>or</td>
      <td>94.80</td>
      <td>96.20</td>
      <td><strong>98.43</strong></td>
      </tr>
      <tr>
      <td>gu</td>
      <td>95.12</td>
      <td>94.63</td>
      <td><strong>99.02</strong></td>
      </tr>
      <tr>
      <td>mr</td>
      <td>96.44</td>
      <td>97.07</td>
      <td><strong>99.37</strong></td>
      </tr>
      <tr>
      <td>kn</td>
      <td>95.93</td>
      <td>96.53</td>
      <td><strong>97.43</strong></td>
      </tr>
      <tr>
      <td>te</td>
      <td>98.67</td>
      <td>98.08</td>
      <td><strong>99.17</strong></td>
      </tr>
      <tr>
      <td>ml</td>
      <td>89.02</td>
      <td>89.18</td>
      <td><strong>92.83</strong></td>
      </tr>
      <tr>
      <td>ta</td>
      <td>95.99</td>
      <td>95.90</td>
      <td><strong>97.26</strong></td>
      </tr>
      <tr>
      <td>Average</td>
      <td>95.52</td>
      <td>95.63</td>
      <td><strong>97.52</strong></td>
      </tr>
      </tbody>
      </table>
    color: default
    _template: table
  - body: "****\n\n### Citing\n\nIf you are using IndicFT, please cite the following\_[paper](https://aclanthology.org/2020.findings-emnlp.445):\n\n```\n@inproceedings{kakwani2020indicnlpsuite,\n    title={{IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages}},\n    author={Divyanshu Kakwani and Anoop Kunchukuttan and Satish Golla and Gokul N.C. and Avik Bhattacharyya and Mitesh M. Khapra and Pratyush Kumar},\n    year={2020},\n    booktitle={Findings of EMNLP},\n}\n\n```\n\n### License\n\nThe IndicFT embeddings are released under the MIT License.\n"
    _template: content
---

