---
blocks:
  - body: >
      # IndicSUPERB


      ***


      IndicSUPERB is a robust benchmark consisting of 6 speech language
      understanding (SLU) tasks across 12 Indian languages.  The tasks include
      automatic  speech recognition, automatic speaker verification, speech
      idntification, query by example and keyword spotting. The IndicSUPERB also
      encompasses Kathbath dataset which has 1684 hours of labelled speech data
      across 12 Indian Languages.      &#x20;


      Read more in our paper - [*IndicSUPERB: A Speech Processing Universal
      Performance Benchmark for Indian
      languages*](https://arxiv.org/pdf/2208.11761.pdf)
    color: default
    _template: content
  - caption: Kathbath dataset details
    markdownTable: "|  | bengali| gujarati| hindi |kannada| malayalam| marathi| odia| punjabi| sanskrit| tamil| telugu| urdu| \n|-|-|-|-|-|-|-|-|-|-|-|-|-|\nData duration (hours) |115.8 |129.3 |150.2 |65.8 |147.3 |185.2 |111.6 |136.9 |115.5 |185.1 |154.9 |86.7|\nNo. of male speakers | 18 | 44 | 58 | 53 | 12 | 82 | 10 | 65 | 95 | 116 | 53 |36 |\nNo. of female speakers | 28\t|35 |63\t|26\t|20\t|61\t|32\t|77\t|110 |42| 51|31|\nVocabulary (no. of unique words)|  6k | 109k  | 54k | 181k | 268k | 132k | 94k | 56k | 298k | 171k | 147k | 44k |\n"
    color: default
    _template: table
  - body: "## Downloads\n\nThe dataset can be downloaded from the links given below.\n\n**Download Links (Clean split):**\n\n*   Train: [\\[85GB\\]](https://indic-asr-public.objectstore.e2enetworks.net/indic-superb/kathbath/clean/train\\_audio.tar)\n*   **Train:  **[**85 GB**](https://indic-asr-public.objectstore.e2enetworks.net/indic-superb/kathbath/clean/train\\_audio.tar \"\")\n*   **Valid: **[**3 GB**](https://indic-asr-public.objectstore.e2enetworks.net/indic-superb/kathbath/clean/valid\\_audio.tar)** **\n*   Test Known:\n\n> Test Unknown:\n\n> Transcripts:\n\n**Audio Dataset Format**\n\n*   The audio files for each language are present in separate folders.\n*   The speaker and gender information are present in the name of the audio file.\n*   The audio files are stored in\_m4a\_format. For resampling please check the sample code [here](https://github.com/AI4Bharat/IndicWav2Vec/tree/main/data\\_prep\\_scripts/ft\\_scripts)\\`\\`\n\n**Folder Structure of audios after extraction**\n\n```\nAudio Data\ndata\n├── bengali\n│   ├── <split_name>\n│   │   ├── 844424931537866-594-f.m4a\n│   │   ├── 844424931029859-973-f.m4a\n│   │   ├── ...\n├── gujarati\n├── ...\n\nTranscripts\ndata\n├── bengali\n│   ├── <split_name>\n│   │   ├── transcription_n2w.txt\n├── gujarati\n├── ...\n```\n\n***\n"
    _template: content
  - caption: Benchmarks
    markdownTable: |-
      Automatic Speech Recognition 

      (Coming Soon)
    markupTable: ''
    color: default
    _template: table
  - body: >
      ## Citing our work


      If you are using any of the resources, please cite the following
      article:@misc\{https://doi.org/10.48550/arxiv.2208.11761,


      ```
        doi = {10.48550/ARXIV.2208.11761},
        url = {https://arxiv.org/abs/2208.11761},
        author = {Javed, Tahir and Bhogale, Kaushal Santosh and Raman, Abhigyan and Kunchukuttan, Anoop and Kumar, Pratyush and Khapra, Mitesh M.},
        title = {IndicSUPERB: A Speech Processing Universal Performance Benchmark for Indian languages},
        publisher = {arXiv},
        year = {2022},
        copyright = {arXiv.org perpetual, non-exclusive license}
      }

      ```


      We would like to hear from you if:


      *   You are using our resources. Please let us know how you are putting
      these resources to use.

      *   You have any feedback on these resources.


      ## License


      The IndicSUPERB benchmark along with datasets, models and code are
      released under the MIT License.


      ## Contributors


      *   Tahir Javed

      *   Kaushal Bhogale

      *   Abhigyan Raman

      *   Anoop Kunchukuttan

      *   Mitesh Khapra

      *   Pratush Kumar


      ## Contact


      *   Anoop Kunchukuttan
      ([anoop.kunchukuttan@gmail.com](mailto:anoop.kunchukuttan@gmail.com))

      *   Mitesh Khapra
      ([miteshk@cse.iitm.ac.in](mailto:miteshk@cse.iitm.ac.in))

      *   Pratyush Kumar
      ([pratyush@cse.iitm.ac.in](mailto:pratyush@cse.iitm.ac.in))


      ## Acknowledgements


      We would like to thank the Ministry of Electronics and Information
      Technology ([MeitY](https://www.meity.gov.in/)) of the Government of India
      and the Centre for Development of Advanced Computing
      ([C-DAC](https://www.cdac.in/index.aspx?id=pune)), Pune for generously
      supporting this work and providing us access to multiple GPU nodes on the
      Param Siddhi Supercomputer. We would like to thank the EkStep Foundation
      and Nilekani Philanthropies for their generous grant which went into
      hiring human resources as well as cloud resources needed for this work. We
      would like to thank DesiCrew for connecting us to native speakers for
      collecting data. We would like to thank Vivek Seshadri from Karya Inc. for
      helping setup the data collection infrastructure on the Karya platform. We
      would like to thank all the members of AI4Bharat team in helping create
      the Query by Example dataset.&#x20;
    _template: content
---

