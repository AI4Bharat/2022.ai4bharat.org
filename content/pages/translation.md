---
blocks:
  - tagline: ''
    headline: Machine Translation
    text: >
      ###### India has 22 constitutionally recognised languages with a
      collective speaker base of over 1 billion speakers. With increasing
      digital penetration and the preference for regional language content on
      the web, a good translation system for Indian languages is a necessity to
      provide equitable access to information and content. For example,
      educational videos for primary, secondary and higher education should be
      available in different Indic languages. Similarly, various government
      advisories, policy announcements, high court judgments, etc. should be
      disseminated in all major regional languages. Despite this fundamental
      need, the accuracy of machine translation (MT) systems to and from Indic
      languages are poorer compared to those for several European languages. At
      AI4Bharat, our goal is to bridge this gap by (i) mining cheaper parallel
      data from the web (ii) manually collecting a small amount of seed data
      (iii) creating robust India-centric benchmarks and (iv) building efficient
      multilngual models which exploit the similarity between Indian languages.
    color: default
    _template: hero
  - quote: Our Contributions
    author: Phil Karlton
    color: default
    _template: testimonial
  - items:
      - icon:
          color: ''
          style: float
          name: ''
        title: Samanantar
        link: /samanantar
        comingSoon: false
        updated: false
        text: >-
          The largest publicly available parallel corpora collection for Indic
          languages containing ∼46.9M parallel sentences between English and 11
          Indic languages, ranging from 142K pairs between English-Assamese to
          8.6M pairs between English-Hindi. Of these 34.6M pairs are newly mined
          as a part of this work.
      - icon:
          color: ''
          style: float
          name: ''
        title: IndicTrans
        link: /indic-trans
        comingSoon: true
        updated: false
        text: >-
          A multilingual single-script transformer based model for translating
          between English and Indian languages. This model is trained using the
          Samanantar corpus and at the time of its release was the state of the
          art open source model as evaluated on Facebook's FLORES benchmark.
      - icon:
          color: ''
          style: float
          name: ''
        title: Shoonya
        link: /shoonya
        comingSoon: true
        updated: false
        text: >-
          IndicTrans powers the translation workflow in our open-source
          annotation platform Shoonya by populating automatic translations which
          can then be edited by humans. These automatic translations act as
          initial hints and reduce the cognitive load on humans, thereby
          improving the efficiency of human translation.
    _template: featuresAlt
  - quote: Our Partners
    author: Phil Karlton
    color: default
    _template: testimonial
---

