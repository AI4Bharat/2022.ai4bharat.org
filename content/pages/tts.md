---
blocks:
  - body: >
      [Speech Synthesis](/tts) / [Models](/models)&#x20;


      # Indic Text-to-Speech


      [Paper](https://arxiv.org/abs/2211.09536) |
      [Code](https://github.com/AI4Bharat/Indic-TTS) |
      [API](https://models.ai4bharat.org/#/tts) |
      [Samples](https://models.ai4bharat.org/#/tts/samples) |
      [Video](https://www.youtube.com/watch?v=SiEXBVudlJw) &#x20;


      We open-source state-of-the-art monolingual multi-speaker text-to-speech
      models based on FastPitch and HiFiGAN for over 13 Indian languages.
    _template: content
  - body: >
      #### Summary


      Deep learning based text-to-speech (TTS) systems have been evolving
      rapidly with advances in model architectures, training methodologies, and
      generalization across speakers and languages. However, these advances have
      not been thoroughly investigated for Indian language speech synthesis.
      Such investigation is computationally expensive given the number and
      diversity of Indian languages, relatively lower resource availability, and
      the diverse set of advances in neural TTS that remain untested.&#x20;


      We evaluate the choice of acoustic models, vocoders, supplementary loss
      functions, training schedules, and speaker and language diversity for
      Dravidian and Indo-Aryan languages. Based on this, we identify monolingual
      models with FastPitch and HiFi-GAN, trained jointly on male and female
      speakers to perform the best. With this setup, we train and evaluate TTS
      models for 13 languages and find our models to significantly improve upon
      existing models in all languages as measured by mean opinion scores. We
      open-source all models on the Bhashini platform.
    _template: content
  - caption: Results
    markdownTable: >-
      |   Language   | as   | bn   | brx  | gu   | hi   | kn   | ml   | mni  |
      mr   | or   | raj | ta   | te   |

      |:------------:|------|------|------|------|------|------|------|------|------|------|-----|------|------|

      | Ground Truth | 3.63 | 4.58 | 4.53 | 4.12 | 4.33 | 4.11 | 4.24 | 4.58 | 
      4.30 | 4.77 | 4.1 | 4.16 | 4.42 |

      |   Our Model  | 2.39 | 3.37 | 3.53 | 3.58 |   4.00  | 3.68 | 3.64 |  3.30
      | 3.26 | 4.19 | 3.40 | 3.84 | 3.66 |
    color: default
    _template: table
---

