---
blocks:
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
  - quote: '2021'
    author: Phil Karlton
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
    _template: featuresAlt
  - quote: '2022'
    author: Phil Karlton
    color: default
    _template: testimonial
  - items:
      - icon:
          color: ''
          style: float
          name: ''
        title: >-
          Samanantar: The Largest Publicly Available Parallel Corpora Collection
          for 11 Indic Languages
        link: 'https://aclanthology.org/2022.tacl-1.9/'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Gowtham Ramesh, Sumanth Doddapaneni, Aravinth Bheemaraj, Mayank
          Jobanputra, Raghavan AK, Ajitesh Sharma, Sujit Sahoo, Harshita Diddee,
          Mahalakshmi J, Divyanshu Kakwani, Navneet Kumar, Aswin Pradeep,
          Srihari Nagaraj, Kumar Deepak, Vivek Raghavan, Anoop Kunchukuttan,
          Pratyush Kumar, Mitesh Shantadevi Khapra
        pointerDetail2: '2022'
        text: >-
          We present Samanantar, the largest publicly available parallel corpora
          collection for Indic languages. The collection contains a total of
          49.7 million sentence pairs between English and 11 Indic languages
          (from two language families). Specifically, we compile 12.4 million
          sentence pairs from existing, publicly available parallel corpora, and
          additionally mine 37.4 million sentence pairs from the Web, resulting
          in a 4× increase. We mine the parallel sentences from the Web by
          combining many corpora, tools, and methods: (a) Web-crawled
          monolingual corpora, (b) document OCR for extracting sentences from
          scanned documents, (c) multilingual representation models for aligning
          sentences, and (d) approximate nearest neighbor search for searching
          in a large collection of sentences. Human evaluation of samples from
          the newly mined corpora validate the high quality of the parallel
          sentences across 11 languages. Further, we extract 83.4 million
          sentence pairs between all 55 Indic language pairs from the
          English-centric parallel corpus using English as the pivot language.
          We trained multilingual NMT models spanning all these languages on
          Samanantar which outperform existing models and baselines on publicly
          available benchmarks, such as FLORES, establishing the utility of
          Samanantar. Our data and models are available publicly at Samanantar
          and we hope they will help advance research in NMT and multilingual
          NLP for Indic languages.
      - icon:
          color: ''
          style: float
          name: ''
        title: Towards Building ASR Systems for the Next Billion Users
        link: 'https://ojs.aaai.org/index.php/AAAI/article/view/21327'
        comingSoon: false
        updated: false
        pointerDetail1: >-
          Tahir Javed, Sumanth Doddapaneni, Abhigyan Raman, Kaushal Santosh
          Bhogale, Gowtham Ramesh, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M.
          Khapra
        pointerDetail2: June 2022
        text: >-
          Recent methods in speech and language technology pretrain very large
          models which are fine-tuned for specific tasks. However, the benefits
          of such large models are often limited to a few resource rich
          languages of the world. In this work, we make multiple contributions
          towards building ASR systems for low resource languages from the
          Indian subcontinent. First, we curate 17,000 hours of raw speech data
          for 40 Indian languages from a wide variety of domains including
          education, news, technology, and finance. Second, using this raw
          speech data we pretrain several variants of wav2vec style models for
          40 Indian languages. Third, we analyze the pretrained models to find
          key features: codebook vectors of similar sounding phonemes are shared
          across languages, representations across layers are discriminative of
          the language family, and attention heads often pay attention within
          small local windows. Fourth, we fine-tune this model for downstream
          ASR for 9 languages and obtain state-of-the-art results on 3 public
          datasets, including on very low-resource languages such as Sinhala and
          Nepali. Our work establishes that multilingual pretraining is an
          effective strategy for building ASR systems for the linguistically
          diverse speakers of the Indian subcontinent.
    _template: featuresAlt
---

