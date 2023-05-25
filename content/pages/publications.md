---
blocks:
  - quote: '2021'
    author: Phil Karlton
    color: default
    _template: testimonial
  - quote: Publications
    color: tint
    _template: testimonial
  - quote: '2020'
    author: ''
    color: default
    _template: testimonial
  - items:
      - icon:
          color: ''
          style: float
          name: ''
        title: Perturbation CheckLists for Evaluating NLG Evaluation Metrics
        link: 'https://aclanthology.org/2021.emnlp-main.575/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Ananya B. Sai, Tanay Dixit, Dev Yashpal Sheth, Sreyas Mohan, Mitesh M.
          Khapra
        pointerDetail2: November 2021
        text: >-
          Natural Language Generation (NLG) evaluation is a multifaceted task
          requiring assessment of multiple desirable criteria, e.g., fluency,
          coherency, coverage, relevance, adequacy, overall quality, etc. Across
          existing datasets for 6 NLG tasks, we observe that the human
          evaluation scores on these multiple criteria are often not correlated.
          For example, there is a very low correlation between human scores on
          fluency and data coverage for the task of structured data to text
          generation. This suggests that the current recipe of proposing new
          automatic evaluation metrics for NLG by showing that they correlate
          well with scores assigned by humans for a single criteria (overall
          quality) alone is inadequate. Indeed, our extensive study involving 25
          automatic evaluation metrics across 6 different tasks and 18 different
          evaluation criteria shows that there is no single metric which
          correlates well with human scores on all desirable criteria, for most
          NLG tasks. Given this situation, we propose CheckLists for better
          design and evaluation of automatic metrics. We design templates which
          target a specific criteria (e.g., coverage) and perturb the output
          such that the quality gets affected only along this specific criteria
          (e.g., the coverage drops). We show that existing evaluation metrics
          are not robust against even such simple perturbations and disagree
          with scores assigned by humans to the perturbed output. The proposed
          templates thus allow for a fine-grained assessment of automatic
          evaluation metrics exposing their limitations and will facilitate
          better design, analysis and evaluation of such metrics. Our templates
          and code are available at https://iitmnlp.github.io/EvalEval/
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and
          Pre-trained Multilingual Language Models for Indian Languages
        link: 'https://aclanthology.org/2020.findings-emnlp.445/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Divyanshu Kakwani, Anoop Kunchukuttan, Satish Golla, Gokul N.C., Avik
          Bhattacharyya, Mitesh M. Khapra, Pratyush Kumar
        pointerDetail2: November 2020
        text: >-
          In this paper, we introduce NLP resources for 11 major Indian
          languages from two major language families. These resources include:
          (a) large-scale sentence-level monolingual corpora, (b) pre-trained
          word embeddings, (c) pre-trained language models, and (d) multiple NLU
          evaluation datasets (IndicGLUE benchmark). The monolingual corpora
          contains a total of 8.8 billion tokens across all 11 languages and
          Indian English, primarily sourced from news crawls. The word
          embeddings are based on FastText, hence suitable for handling
          morphological complexity of Indian languages. The pre-trained language
          models are based on the compact ALBERT model. Lastly, we compile the
          (IndicGLUE benchmark for Indian language NLU. To this end, we create
          datasets for the following tasks: Article Genre Classification,
          Headline Prediction, Wikipedia Section-Title Prediction, Cloze-style
          Multiple choice QA, Winograd NLI and COPA. We also include publicly
          available datasets for some Indic languages for tasks like Named
          Entity Recognition, Cross-lingual Sentence Retrieval, Paraphrase
          detection, etc. Our embeddings are competitive or better than existing
          pre-trained embeddings on multiple tasks. We hope that the
          availability of the dataset will accelerate Indic NLP research which
          has the potential to impact more than a billion people. It can also
          help the community in evaluating advances in NLP over a more diverse
          pool of languages. The data and models are available at
          https://indicnlp.ai4bharat.org.
    _template: featuresAlt
---

