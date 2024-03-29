---
blocks:
  - caption: 2023
    markupTable: >-
      <table>
        <thead>
          <tr>
            <th>Conference</th>
            <th>Title</th>
            <th>Abstract</th>
            <th>Quick Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              ArXiv 2023
            </td>
            <td>
              In-context Example Selection for Machine Translation Using Multiple Features<br/><small>Aswanth Kumar, Anoop Kunchukuttan, Ratish Puduppully, Raj Dabre</small> 
            </td>
            <td>
              <details><summary>Abstract</summary>Large language models have demonstrated the capability to perform well on many NLP tasks when the input is prompted with a few examples (in-context learning) including machine translation, which is the focus of this work. The quality of translation depends on various features of the selected examples, such as their quality and relevance. However, previous work has predominantly focused on individual features for example selection. We propose a general framework for combining different features influencing example selection. We learn a regression function that selects examples based on multiple features in order to maximize the translation quality. On multiple language pairs and language models, we show that our example selection method significantly outperforms random selection as well as strong single-factor baselines reported in the literature. Using our example selection method, we see an improvement of over 2.5 COMET points on average with respect to a strong BM25 retrieval-based baseline.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2305.14105" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>
              ArXiv 2023
            </td>
            <td>
              A Comprehensive Analysis of Adapter Efficiency <br/><small>Nandini Mundra, Sumanth Doddapaneni, Raj Dabre, Anoop Kunchukuttan, Ratish Puduppully, Mitesh M. Khapra</small> 
            </td>
            <td>
              <details>
              <summary>Abstract</summary>Adapters have been positioned as a parameter-efficient fine-tuning (PEFT) approach, whereby a minimal number of parameters are added to the model and fine-tuned. However, adapters have not been sufficiently analyzed to understand if PEFT translates to benefits in training/deployment efficiency and maintainability/extensibility. Through extensive experiments on many adapters, tasks, and languages in supervised and cross-lingual zero-shot settings, we clearly show that for Natural Language Understanding (NLU) tasks, the parameter efficiency in adapters does not translate to efficiency gains compared to full fine-tuning of models. More precisely, adapters are relatively expensive to train and have slightly higher deployment latency. Furthermore, the maintainability/extensibility benefits of adapters can be achieved with simpler approaches like multi-task training via full fine-tuning, which also provide relatively faster training times. We, therefore, recommend that for moderately sized models for NLU tasks, practitioners should rely on full fine-tuning or multi-task training rather than using adapters. Our code is available at https://github.com/AI4Bharat/adapter-efficiency
              </details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2305.07491" target="_blank">Paper</a>,<a href="https://github.com/AI4Bharat/adapter-efficiency" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              INTERSPEECH 2023
            </td>
            <td>
              Vistaar: Diverse Benchmarks and Training Sets for Indian Language ASR <br/><small>Kaushal Santosh Bhogale, Sai Sundaresan, Abhigyan Raman, Tahir Javed, Mitesh M. Khapra, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Improving ASR systems is necessary to make new LLM-based use-cases accessible to people across the globe. In this paper, we focus on Indian languages, and make the case that diverse benchmarks are required to evaluate and improve ASR systems for Indian languages. To address this, we collate Vistaar as a set of 59 benchmarks across various language and domain combinations, on which we evaluate 3 publicly available ASR systems and 2 commercial systems. We also train IndicWhisper models by fine-tuning the Whisper models on publicly available training datasets across 12 Indian languages totalling to 10.7K hours. We show that IndicWhisper significantly improves on considered ASR systems on the Vistaar benchmark. Indeed, IndicWhisper has the lowest WER in 39 out of the 59 benchmarks, with an average reduction of 4.1 WER. We open-source all datasets, code and models.</details>
            </td>
            <td>
              <a href="http://arxiv.org/abs/2305.15386" target="_blank">Paper</a>, <a href="https://github.com/AI4Bharat/vistaar" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              INTERSPEECH 2023
            </td>
            <td>
              Svarah: Evaluating English ASR Systems on Indian Accents <br/><small>Tahir Javed, Sakshi Joshi, Vignesh Nagarajan, Sai Sundaresan, Janki Nawale, Abhigyan Raman, Kaushal Bhogale, Pratyush Kumar, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>India is the second largest English-speaking country in the world with a speaker base of roughly 130 million. Thus, it is imperative that automatic speech recognition (ASR) systems for English should be evaluated on Indian accents. Unfortunately, Indian speakers find a very poor representation in existing English ASR benchmarks such as LibriSpeech, Switch-board, Speech Accent Archive, etc. In this work, we address this gap by creating Svarah, a benchmark that contains 9.6 hours of transcribed English audio from 117 speakers across 65 geo graphic locations throughout India, resulting in a diverse range of accents. Svarah comprises both read speech and spontaneous conversational data, covering various domains, such as history, culture, tourism, etc., ensuring a diverse vocabulary. We evaluate 6 open source ASR models and 2 commercial ASR systems on Svarah and show that there is clear scope for improvement on Indian accents. Svarah as well as all our code will be publicly available.</details>
            </td>
            <td>
              Coming Soon!
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2023
            </td>
            <td>
              Vārta: A Large-Scale Headline-Generation Dataset for Indic Languages <br/><small>Rahul Aralikatte, Ziling Cheng, Sumanth Doddapaneni, Jackie Chi Kit Cheung</small>
            </td>
            <td>
              <details><summary>Abstract</summary>We present Vārta, a large-scale multilingual dataset for headline generation in Indic languages. This dataset includes 41.8 million news articles in 14 different Indic languages (and English), which come from a variety of high-quality sources. To the best of our knowledge, this is the largest collection of curated articles for Indic languages currently available. We use the data collected in a series of experiments to answer important questions related to Indic NLP and multilinguality research in general. We show that the dataset is challenging even for state-of-the-art abstractive models and that they perform only slightly better than extractive baselines. Owing to its size, we also show that the dataset can be used to pretrain strong language models that outperform competitive baselines in both NLU and NLG benchmarks.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2305.05858" target="_blank">Paper</a>, <a href="https://github.com/rahular/varta" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2023
            </td>
            <td>
              Bhasha-Abhijnaanam: Native-script and Romanized Language Identification for 22 Indic languages <br/><small>Yash Madhani, Mitesh M. Khapra, Anoop Kunchukuttan</small>
            </td>
            <td>
              <details><summary>Abstract</summary>We create publicly available language identi- fication (LID) datasets and models in all 22 Indian languages listed in the Indian consti- tution in both native-script and romanized text. First, we create Bhasha-Abhijnaanam, a language identification test set for native-script as well as romanized text which spans all 22 Indic languages. We also train IndicLID, a language identifier for all the above-mentioned languages in both native and romanized script. For native-script text, it has better language coverage than existing LIDs and is competitive or better than other LIDs. IndicLID is the first LID for romanized text in Indian languages. Two major challenges for romanized text LID are the lack of training data and low-LID performance when languages are similar. We provide simple and effective solutions to these problems. In general, there has been limited work on romanized text in any language, and our findings are relevant to other languages that need romanized language identification. Our models are publicly available at https: //github.com/AI4Bharat/IndicLID un- der open-source licenses. Our training and test sets are also publicly available at https://huggingface.co/datasets/ai4bharat/Bhasha-Abhijnaanam under open-source licenses.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2305.15814" target="_blank">Paper</a>,<a href="https://github.com/AI4Bharat/IndicLID" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ArXiv 2023
            </td>
            <td>
              An Empirical Study of Leveraging Knowledge Distillation for Compressing Multilingual Neural Machine Translation Models <br/><small>Varun Gumma, Raj Dabre, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Knowledge distillation (KD) is a well-known method for compressing neural models. However, works focusing on distilling knowledge from large multilingual neural machine translation (MNMT) models into smaller ones are practically nonexistent, despite the popularity and superiority of MNMT. This paper bridges this gap by presenting an empirical investigation of knowledge distillation for compressing MNMT models. We take Indic to English translation as a case study and demonstrate that commonly used language-agnostic and language-aware KD approaches yield models that are 4-5x smaller but also suffer from performance drops of up to 3.5 BLEU. To mitigate this, we then experiment with design considerations such as shallower versus deeper models, heavy parameter sharing, multi-stage training, and adapters. We observe that deeper compact models tend to be as good as shallower non-compact ones, and that fine-tuning a distilled model on a High-Quality subset slightly boosts translation quality. Overall, we conclude that compressing MNMT models via KD is challenging, indicating immense scope for further research.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2304.09388" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2023
            </td>
            <td>
              Towards Leaving No Indic Language Behind: Building Monolingual Corpora, Benchmark and Models for Indic Languages <br/><small>Sumanth Doddapaneni, Rahul Aralikatte, Gowtham Ramesh, Shreya Goyal, Mitesh M. Khapra, Anoop Kunchukuttan, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Building Natural Language Understanding (NLU) capabilities for Indic languages, which have a collective speaker base of more than one billion speakers is absolutely crucial. In this work, we aim to improve the NLU capabilities of Indic languages by making contributions along 3 important axes (i) monolingual corpora (ii) NLU testsets (iii) multilingual LLMs focusing on Indic languages. Specifically, we curate the largest monolingual corpora, IndicCorp, with 20.9B tokens covering 24 languages from 4 language families - a 2.3x increase over prior work, while supporting 12 additional languages. Next, we create a human-supervised benchmark, IndicXTREME, consisting of nine diverse NLU tasks covering 20 languages. Across languages and tasks, IndicXTREME contains a total of 105 evaluation sets, of which 52 are new contributions to the literature. To the best of our knowledge, this is the first effort towards creating a standard benchmark for Indic languages that aims to test the multilingual zero-shot capabilities of pretrained language models. Finally, we train IndicBERT v2, a state-of-the-art model supporting all the languages. Averaged across languages and tasks, the model achieves an absolute improvement of 2 points over a strong baseline. The data and models are available at https://github.com/AI4Bharat/IndicBERT.</details> 
            </td>
            <td>
              <a href="https://arxiv.org/abs/2212.05409" target="_blank">Paper</a>, <a href="https://github.com/AI4Bharat/IndicBERT" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2023
            </td>
            <td>
              Naamapadam: A Large-Scale Named Entity Annotated Data for Indic Languages <br/><small>Arnav Mhaske, Harshit Kedia, Sumanth Doddapaneni, Mitesh M. Khapra, Pratyush Kumar, Rudra Murthy V, Anoop Kunchukuttan</small>
            </td>
            <td>
              <details><summary>Abstract</summary>We present, Naamapadam, the largest publicly available Named Entity Recognition (NER) dataset for the 11 major Indian languages from two language families. In each language, it contains more than 400k sentences annotated with a total of at least 100k entities from three standard entity categories (Person, Location and Organization) for 9 out of the 11 languages. The training dataset has been automatically created from the Samanantar parallel corpus by projecting automatically tagged entities from an English sentence to the corresponding Indian language sentence. We also create manually annotated testsets for 8 languages containing approximately 1000 sentences per language. We demonstrate the utility of the obtained dataset on existing testsets and the Naamapadam-test data for 8 Indic languages. We also release IndicNER, a multilingual mBERT model fine-tuned on the Naamapadam training set. IndicNER achieves the best F1 on the Naamapadam-test set compared to an mBERT model fine-tuned on existing datasets. IndicNER achieves an F1 score of more than 80 for 7 out of 11 Indic languages. The dataset and models are available under open-source licenses at https://ai4bharat.iitm.ac.in/naamapadam.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2212.10168" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2023
            </td>
            <td>
              IndicMT Eval: A Dataset to Meta-Evaluate Machine Translation metrics for Indian Languages <br/><small>Ananya B. Sai, Vignesh Nagarajan, Tanay Dixit, Raj Dabre, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>The rapid growth of machine translation (MT) systems has necessitated comprehensive studies to meta-evaluate evaluation metrics being used, which enables a better selection of metrics that best reflect MT quality. Unfortunately, most of the research focuses on high-resource languages, mainly English, the observations for which may not always apply to other languages. Indian languages, having over a billion speakers, are linguistically different from English, and to date, there has not been a systematic study of evaluating MT systems from English into Indian languages. In this paper, we fill this gap by creating an MQM dataset consisting of 7000 fine-grained annotations, spanning 5 Indian languages and 7 MT systems, and use it to establish correlations between annotator scores and scores obtained using existing automatic metrics. Our results show that pre-trained metrics, such as COMET, have the highest correlations with annotator scores. Additionally, we find that the metrics do not adequately capture fluency-based errors in Indian languages, and there is a need to develop metrics focused on Indian languages. We hope that our dataset and analysis will help promote further research in this area.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2212.10180" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              AAAI 2023
            </td>
            <td>
              IndicSUPERB: A Speech Processing Universal Performance Benchmark for Indian languages <br/><small>Tahir Javed, Kaushal Santosh Bhogale, Abhigyan Raman, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>A cornerstone in AI research has been the creation and adoption of standardized training and test datasets to earmark the progress of state-of-the-art models. A particularly successful example is the GLUE dataset for training and evaluating Natural Language Understanding (NLU) models for English. The large body of research around self-supervised BERT-based language models revolved around performance improvements on NLU tasks in GLUE. To evaluate language models in other languages, several language-specific GLUE datasets were created. The area of speech language understanding (SLU) has followed a similar trajectory. The success of large self-supervised models such as wav2vec2 enable creation of speech models with relatively easy to access unlabelled data. These models can then be evaluated on SLU tasks, such as the SUPERB benchmark. In this work, we extend this to Indic languages by releasing the IndicSUPERB benchmark. Specifically, we make the following three contributions. (i) We collect Kathbath containing 1,684 hours of labelled speech data across 12 Indian languages from 1,218 contributors located in 203 districts in India. (ii) Using Kathbath, we create benchmarks across 6 speech tasks: Automatic Speech Recognition, Speaker Verification, Speaker Identification (mono/multi), Language Identification, Query By Example, and Keyword Spotting for 12 languages. (iii) On the released benchmarks, we train and evaluate different self-supervised models alongside a commonly used baseline FBANK. We show that language-specific fine-tuned models are more accurate than baseline on most of the tasks, including a large gap of 76\% for the Language Identification task. However, for speaker identification, self-supervised models trained on large datasets demonstrate an advantage. We hope IndicSUPERB contributes to the progress of developing speech language understanding models for Indian languages.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2208.11761" target="_blank">Paper</a>, <a href="https://github.com/AI4Bharat/IndicSUPERB" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ICASSP 2023
            </td>
            <td>
              Effectiveness of Mining Audio and Text Pairs from Public Data for Improving ASR Systems for Low-Resource Languages <br/><small>Kaushal Santosh Bhogale, Abhigyan Raman, Tahir Javed, Sumanth Doddapaneni, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>End-to-end (E2E) models have become the default choice for state-of-the-art speech recognition systems. Such models are trained on large amounts of labelled data, which are often not available for low-resource languages. Techniques such as self-supervised learning and transfer learning hold promise, but have not yet been effective in training accurate models. On the other hand, collecting labelled datasets on a diverse set of domains and speakers is very expensive. In this work, we demonstrate an inexpensive and effective alternative to these approaches by ``mining'' text and audio pairs for Indian languages from public sources, specifically from the public archives of All India Radio. As a key component, we adapt the Needleman-Wunsch algorithm to align sentences with corresponding audio segments given a long audio and a PDF of its transcript, while being robust to errors due to OCR, extraneous text, and non-transcribed speech. We thus create Shrutilipi, a dataset which contains over 6,400 hours of labelled audio across 12 Indian languages totalling to 4.95M sentences. On average, Shrutilipi results in a 2.3x increase over publicly available labelled data. We establish the quality of Shrutilipi with 21 human evaluators across the 12 languages. We also establish the diversity of Shrutilipi in terms of represented regions, speakers, and mentioned named entities. Significantly, we show that adding Shrutilipi to the training set of Wav2Vec models leads to an average decrease in WER of 5.8\% for 7 languages on the IndicSUPERB benchmark. For Hindi, which has the most benchmarks (7), the average WER falls from 18.8% to 13.5%. This improvement extends to efficient models: We show a 2.3% drop in WER for a Conformer model (10x smaller than Wav2Vec). Finally, we demonstrate the diversity of Shrutilipi by showing that the model trained with it is more robust to noisy input.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2208.12666" target="_blank">Paper</a>, <a href="https://ai4bharat.iitm.ac.in/shrutilipi" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ICASSP 2023
            </td>
            <td>
              Towards Building Text-To-Speech Systems for the Next Billion Users <br/><small>Gokul Karthik Kumar, Praveen S V, Pratyush Kumar, Mitesh M. Khapra, Karthik Nandakumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Deep learning based text-to-speech (TTS) systems have been evolving rapidly with advances in model architectures, training methodologies, and generalization across speakers and languages. However, these advances have not been thoroughly investigated for Indian language speech synthesis. Such investigation is computationally expensive given the number and diversity of Indian languages, relatively lower resource availability, and the diverse set of advances in neural TTS that remain untested. In this paper, we evaluate the choice of acoustic models, vocoders, supplementary loss functions, training schedules, and speaker and language diversity for Dravidian and Indo-Aryan languages. Based on this, we identify monolingual models with FastPitch and HiFi-GAN V1, trained jointly on male and female speakers to perform the best. With this setup, we train and evaluate TTS models for 13 languages and find our models to significantly improve upon existing models in all languages as measured by mean opinion scores. We open-source all models on the Bhashini platform.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2211.09536" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
      </table>
    color: default
    _template: table
  - caption: 2022
    markupTable: >-
      <table>
        <thead>
          <tr>
            <th>Conference</th>
            <th>Title</th>
            <th>Abstract</th>
            <th>Quick Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              ArXiv 2022
            </td>
            <td>
              SuperShaper: Task-agnostic super pre-training of BERT models with variable hidden dimensions <br/><small>Vinod Ganesan, Gowtham Ramesh, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Task-agnostic pre-training followed by task-specific fine-tuning is a default approach to train NLU models. Such models need to be deployed on devices across the cloud and the edge with varying resource and accuracy constraints. For a given task, repeating pre-training and fine-tuning across tens of devices is prohibitively expensive. We propose SuperShaper, a task agnostic pre-training approach which simultaneously pre-trains a large number of Transformer models by varying shapes, i.e., by varying the hidden dimensions across layers. This is enabled by a backbone network with linear bottleneck matrices around each Transformer layer which are sliced to generate differently shaped sub-networks. In spite of its simple design space and efficient implementation, SuperShaper discovers networks that effectively trade-off accuracy and model size: Discovered networks are more accurate than a range of hand-crafted and automatically searched networks on GLUE benchmarks. Further, we find two critical advantages of shape as a design variable for Neural Architecture Search (NAS): (a) heuristics of good shapes can be derived and networks found with these heuristics match and even improve on carefully searched networks across a range of parameter counts, and (b) the latency of networks across multiple CPUs and GPUs are insensitive to the shape and thus enable device-agnostic search. In summary, SuperShaper radically simplifies NAS for language models and discovers networks that generalize across tasks, parameter constraints, and devices.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2110.04711" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ArXiv 2022
            </td>
            <td>
              Aksharantar: Towards building open transliteration tools for the next billion users <br/><small>Yash Madhani, Sushane Parthan, Priyanka Bedekar, Ruchi Khapra, Vivek Seshadri, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>We introduce Aksharantar, the largest publicly available transliteration dataset for 21 Indic languages containing 26 million transliteration pairs. We build this dataset by mining transliteration pairs from large monolingual and parallel corpora, as well as collecting transliterations from human annotators to ensure diversity of words and representation of low-resource languages. We introduce a new, large, diverse testset for Indic language transliteration containing 103k words pairs spanning 19 languages that enables fine-grained analysis of transliteration models. We train the IndicXlit model on the Aksharantar training set. IndicXlit is a single transformer-based multilingual transliteration model for roman to Indic script conversion supporting 21 Indic languages. It achieves state-of-the art results on the Dakshina testset, and establishes strong baselines on the Aksharantar testset released along with this work. All the datasets and models are publicly available at https://indicnlp.ai4bharat.org/aksharantar. We hope the availability of these large-scale, open resources will spur innovation for Indic language transliteration and downstream applications.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2205.03018" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              NeurIPS 2022
            </td>
            <td>
              Addressing Resource Scarcity across Sign Languages with Multilingual Pretraining and Unified-Vocabulary Datasets <br/><small>Gokul NC, Manideep Ladi, Sumit Negi, Prem Selvaraj, Pratyush Kumar, Mitesh Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>There are over 300 sign languages in the world, many of which have very limited or no labelled sign-to-text datasets. To address low-resource data scenarios, self-supervised pretraining and multilingual finetuning have been shown to be effective in natural language and speech processing. In this work, we apply these ideas to sign language recognition.We make three contributions.- First, we release SignCorpus, a large pretraining dataset on sign languages comprising about 4.6K hours of signing data across 10 sign languages. SignCorpus is curated from sign language videos on the internet, filtered for data quality, and converted into sequences of pose keypoints thereby removing all personal identifiable information (PII).- Second, we release Sign2Vec, a graph-based model with 5.2M parameters that is pretrained on SignCorpus. We envisage Sign2Vec as a multilingual large-scale pretrained model which can be fine-tuned for various sign recognition tasks across languages.- Third, we create MultiSign-ISLR -- a multilingual and label-aligned dataset of sequences of pose keypoints from 11 labelled datasets across 7 sign languages, and MultiSign-FS -- a new finger-spelling training and test set across 7 languages. On these datasets, we fine-tune Sign2Vec to create multilingual isolated sign recognition models. With experiments on multiple benchmarks, we show that pretraining and multilingual transfer are effective giving significant gains over state-of-the-art results.All datasets, models, and code has been made open-source via the OpenHands toolkit.</details>
            </td>
            <td>
              <a href="https://proceedings.neurips.cc/paper_files/paper/2022/hash/eb011fd258c763c44d8c6a0e9ce04f17-Abstract-Datasets_and_Benchmarks.html" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2022
            </td>
            <td>
              IndicNLG Benchmark: Multilingual Datasets for Diverse NLG Tasks in Indic Languages <br/><small>Aman Kumar, Himani Shrotriya, Prachi Sahu, Amogh Mishra, Raj Dabre, Ratish Puduppully, Anoop Kunchukuttan, Mitesh M. Khapra, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Natural Language Generation (NLG) for non-English languages is hampered by the scarcity of datasets in these languages. We present the IndicNLG Benchmark, a collection of datasets for benchmarking NLG for 11 Indic languages. We focus on five diverse tasks, namely, biography generation using Wikipedia infoboxes, news headline generation, sentence summarization, paraphrase generation and, question generation. We describe the created datasets and use them to benchmark the performance of several monolingual and multilingual baselines that leverage pre-trained sequence-to-sequence models. Our results exhibit the strong performance of multilingual language-specific pre-trained models, and the utility of models trained on our dataset for other related NLG tasks. Our dataset creation methods can be easily applied to modest-resource languages as they involve simple steps such as scraping news articles and Wikipedia infoboxes, light cleaning, and pivoting through machine translation data. To the best of our knowledge, the IndicNLG Benchmark is the first NLG benchmark for Indic languages and the most diverse multilingual NLG dataset, with approximately 8M examples across 5 tasks and 11 languages. The datasets and models will be publicly available.</details>
            </td>
            <td>
              <a href="https://aclanthology.org/2022.emnlp-main.360/" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2022
            </td>
            <td>
              OpenHands: Making Sign Language Recognition Accessible with Pose-based Pretrained Models across Languages <br/><small>Prem Selvaraj, Gokul Nc, Pratyush Kumar, Mitesh Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>AI technologies for Natural Languages have made tremendous progress recently. However, commensurate progress has not been made on Sign Languages, in particular, in recognizing signs as individual words or as complete sentences. We introduce OpenHands, a library where we take four key ideas from the NLP community for low-resource languages and apply them to sign languages for word-level recognition. First, we propose using pose extracted through pretrained models as the standard modality of data in this work to reduce training time and enable efficient inference, and we release standardized pose datasets for different existing sign language datasets. Second, we train and release checkpoints of 4 pose-based isolated sign language recognition models across 6 languages (American, Argentinian, Chinese, Greek, Indian, and Turkish), providing baselines and ready checkpoints for deployment. Third, to address the lack of labelled data, we propose self-supervised pretraining on unlabelled data. We curate and release the largest pose-based pretraining dataset on Indian Sign Language (Indian-SL). Fourth, we compare different pretraining strategies and for the first time establish that pretraining is effective for sign language recognition by demonstrating (a) improved fine-tuning performance especially in low-resource settings, and (b) high crosslingual transfer from Indian-SL to few other sign languages. We open-source all models and datasets in OpenHands with a hope that it makes research in sign languages reproducible and more accessible.</details>
            </td>
            <td>
              <a href="https://aclanthology.org/2022.acl-long.150/" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              ACL 2022
            </td>
            <td>
              IndicBART: A Pre-trained Model for Indic Natural Language Generation <br/><small>Raj Dabre, Himani Shrotriya, Anoop Kunchukuttan, Ratish Puduppully, Mitesh Khapra, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>In this paper, we study pre-trained sequence-to-sequence models for a group of related languages, with a focus on Indic languages. We present IndicBART, a multilingual, sequence-to-sequence pre-trained model focusing on 11 Indic languages and English. IndicBART utilizes the orthographic similarity between Indic scripts to improve transfer learning between similar Indic languages. We evaluate IndicBART on two NLG tasks: Neural Machine Translation (NMT) and extreme summarization. Our experiments on NMT and extreme summarization show that a model specific to related languages like IndicBART is competitive with large pre-trained models like mBART50 despite being significantly smaller. It also performs well on very low-resource translation scenarios where languages are not included in pre-training or fine-tuning. Script sharing, multilingual training, and better utilization of limited model capacity contribute to the good performance of the compact IndicBART model.</details>
            </td>
            <td>
              <a href="https://aclanthology.org/2022.findings-acl.145/" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              AAAI 2022
            </td>
            <td>
              Towards Building ASR Systems for the Next Billion Users <br/><small>Tahir Javed, Sumanth Doddapaneni, Abhigyan Raman, Kaushal Santosh Bhogale, Gowtham Ramesh, Anoop Kunchukuttan, Pratyush Kumar, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Recent methods in speech and language technology pretrain very LARGE models which are fine-tuned for specific tasks. However, the benefits of such LARGE models are often limited to a few resource rich languages of the world. In this work, we make multiple contributions towards building ASR systems for low resource languages from the Indian subcontinent. First, we curate 17,000 hours of raw speech data for 40 Indian languages from a wide variety of domains including education, news, technology, and finance. Second, using this raw speech data we pretrain several variants of wav2vec style models for 40 Indian languages. Third, we analyze the pretrained models to find key features: codebook vectors of similar sounding phonemes are shared across languages, representations across layers are discriminative of the language family, and attention heads often pay attention within small local windows. Fourth, we fine-tune this model for downstream ASR for 9 languages and obtain state-of-the-art results on 3 public datasets, including on very low-resource languages such as Sinhala and Nepali. Our work establishes that multilingual pretraining is an effective strategy for building ASR systems for the linguistically diverse speakers of the Indian subcontinent. Our code, data and models are available publicly at https://indicnlp.ai4bharat.org/indicwav2vec/ and we hope they will help advance research in ASR for Indic languages.</details>
            </td>
            <td>
              <a href="https://ojs.aaai.org/index.php/AAAI/article/view/21327" target="_blank">Paper</a>, <a href="https://github.com/AI4Bharat/IndicWav2Vec" target="_blank">Code</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              TACL 2022
            </td>
            <td>
              Samanantar: The Largest Publicly Available Parallel Corpora Collection for 11 Indic Languages <br/><small>Gowtham Ramesh, Sumanth Doddapaneni, Aravinth Bheemaraj, Mayank Jobanputra, Raghavan AK, Ajitesh Sharma, Sujit Sahoo, Harshita Diddee, Mahalakshmi J, Divyanshu Kakwani, Navneet Kumar, Aswin Pradeep, Srihari Nagaraj, Kumar Deepak, Vivek Raghavan, Anoop Kunchukuttan, Pratyush Kumar, Mitesh Shantadevi Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>We present Samanantar, the largest publicly available parallel corpora collection for Indic languages. The collection contains a total of 49.7 million sentence pairs between English and 11 Indic languages (from two language families). Specifically, we compile 12.4 million sentence pairs from existing, publicly available parallel corpora, and additionally mine 37.4 million sentence pairs from the Web, resulting in a 4× increase. We mine the parallel sentences from the Web by combining many corpora, tools, and methods: (a) Web-crawled monolingual corpora, (b) document OCR for extracting sentences from scanned documents, (c) multilingual representation models for aligning sentences, and (d) approximate nearest neighbor search for searching in a large collection of sentences. Human evaluation of samples from the newly mined corpora validate the high quality of the parallel sentences across 11 languages. Further, we extract 83.4 million sentence pairs between all 55 Indic language pairs from the English-centric parallel corpus using English as the pivot language. We trained multilingual NMT models spanning all these languages on Samanantar which outperform existing models and baselines on publicly available benchmarks, such as FLORES, establishing the utility of Samanantar. Our data and models are available publicly at Samanantar and we hope they will help advance research in NMT and multilingual NLP for Indic languages.</details>
            </td>
            <td>
              <a href="https://aclanthology.org/2022.tacl-1.9/" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
      </table>
    color: default
    _template: table
  - caption: 2021
    markupTable: >-
      <table>
        <thead>
          <tr>
            <th>Conference</th>
            <th>Title</th>
            <th>Abstract</th>
            <th>Quick Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              ArXiv 2021
            </td>
            <td>
              A Primer on Pretrained Multilingual Language Models <br/><small>Sumanth Doddapaneni, Gowtham Ramesh, Mitesh M. Khapra, Anoop Kunchukuttan, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Multilingual Language Models (\MLLMs) such as mBERT, XLM, XLM-R, \textit{etc.} have emerged as a viable option for bringing the power of pretraining to a large number of languages. Given their success in zero-shot transfer learning, there has emerged a large body of work in (i) building bigger \MLLMs~covering a large number of languages (ii) creating exhaustive benchmarks covering a wider variety of tasks and languages for evaluating \MLLMs~ (iii) analysing the performance of \MLLMs~on monolingual, zero-shot cross-lingual and bilingual tasks (iv) understanding the universal language patterns (if any) learnt by \MLLMs~ and (v) augmenting the (often) limited capacity of \MLLMs~ to improve their performance on seen or even unseen languages. In this survey, we review the existing literature covering the above broad areas of research pertaining to \MLLMs. Based on our survey, we recommend some promising directions of future research.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2107.00676" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              EMNLP 2021
            </td>
            <td>
              Perturbation CheckLists for Evaluating NLG Evaluation Metrics <br/><small>Ananya B. Sai, Tanay Dixit, Dev Yashpal Sheth, Sreyas Mohan, Mitesh M. Khapra</small>
            </td>
            <td>
              <details><summary>Abstract</summary>Natural Language Generation (NLG) evaluation is a multifaceted task requiring assessment of multiple desirable criteria, e.g., fluency, coherency, coverage, relevance, adequacy, overall quality, etc. Across existing datasets for 6 NLG tasks, we observe that the human evaluation scores on these multiple criteria are often not correlated. For example, there is a very low correlation between human scores on fluency and data coverage for the task of structured data to text generation. This suggests that the current recipe of proposing new automatic evaluation metrics for NLG by showing that they correlate well with scores assigned by humans for a single criteria (overall quality) alone is inadequate. Indeed, our extensive study involving 25 automatic evaluation metrics across 6 different tasks and 18 different evaluation criteria shows that there is no single metric which correlates well with human scores on all desirable criteria, for most NLG tasks. Given this situation, we propose CheckLists for better design and evaluation of automatic metrics. We design templates which target a specific criteria (e.g., coverage) and perturb the output such that the quality gets affected only along this specific criteria (e.g., the coverage drops). We show that existing evaluation metrics are not robust against even such simple perturbations and disagree with scores assigned by humans to the perturbed output. The proposed templates thus allow for a fine-grained assessment of automatic evaluation metrics exposing their limitations and will facilitate better design, analysis and evaluation of such metrics. Our templates and code are available at https://iitmnlp.github.io/EvalEval</details>
            </td>
            <td>
              <a href="https://aclanthology.org/2021.emnlp-main.575/" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
      </table>
    color: default
    _template: table
  - caption: 2020
    markupTable: >-
      <table>
        <thead>
          <tr>
            <th>Conference</th>
            <th>Title</th>
            <th>Abstract</th>
            <th>Quick Links</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              EMNLP 2020
            </td>
            <td>
              IndicNLPSuite: Monolingual Corpora, Evaluation Benchmarks and Pre-trained Multilingual Language Models for Indian Languages <br/><small>Divyanshu Kakwani, Anoop Kunchukuttan, Satish Golla, Gokul N.C., Avik Bhattacharyya, Mitesh M. Khapra, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>In this paper, we introduce NLP resources for 11 major Indian languages from two major language families. These resources include: (a) large-scale sentence-level monolingual corpora, (b) pre-trained word embeddings, (c) pre-trained language models, and (d) multiple NLU evaluation datasets (IndicGLUE benchmark). The monolingual corpora contains a total of 8.8 billion tokens across all 11 languages and Indian English, primarily sourced from news crawls. The word embeddings are based on FastText, hence suitable for handling morphological complexity of Indian languages. The pre-trained language models are based on the compact ALBERT model. Lastly, we compile the IndicGLUE benchmark for Indian language NLU. To this end, we create datasets for the following tasks: Article Genre Classification, Headline Prediction, Wikipedia Section-Title Prediction, Cloze-style Multiple choice QA, Winograd NLI and COPA. We also include publicly available datasets for some Indic languages for tasks like Named Entity Recognition, Cross-lingual Sentence Retrieval, Paraphrase detection, etc. Our embeddings are competitive or better than existing pre-trained embeddings on multiple tasks. We hope that the availability of the dataset will accelerate Indic NLP research which has the potential to impact more than a billion people. It can also help the community in evaluating advances in NLP over a more diverse pool of languages.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2107.00676" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>

        <tbody>
          <tr>
            <td>
              ArXiv 2020
            </td>
            <td>
              AI4Bharat-IndicNLP Corpus: Monolingual Corpora and Word Embeddings for Indic Languages <br/><small>Anoop Kunchukuttan, Divyanshu Kakwani, Satish Golla, Gokul N.C., Avik Bhattacharyya, Mitesh M. Khapra, Pratyush Kumar</small>
            </td>
            <td>
              <details><summary>Abstract</summary>We present the IndicNLP corpus, a large-scale, general-domain corpus containing 2.7 billion words for 10 Indian languages from two language families. We share pre-trained word embeddings trained on these corpora. We create news article category classification datasets for 9 languages to evaluate the embeddings. We show that the IndicNLP embeddings significantly outperform publicly available pre-trained embedding on multiple evaluation tasks. We hope that the availability of the corpus will accelerate Indic NLP research.</details>
            </td>
            <td>
              <a href="https://arxiv.org/abs/2005.00085" target="_blank">Paper</a>
            </td>
          </tr>
        </tbody>
      </table>
    color: default
    _template: table
---

