# The Resilience Paradox 🧠🦠
*A small exploratory project*

## 📖 About This Project
This is a modest,  experiment aimed at learning how to apply Machine Learning to transcriptomic data. It explores a simple but interesting question: how does a healthy brain react at the molecular level when the body faces a severe peripheral infection? Rather than claiming major biological discoveries, this project is a proof-of-concept to see if anomaly detection algorithms can identify a transcriptional "resilience shield."

## 📊 The Data
* **Dataset:** `GSE313307` (Bulk RNA-sequencing data from the human prefrontal cortex).
* **Study Design:** While the original dataset focuses on Alzheimer's Disease (AD), this specific sub-project filters out all AD samples. We focus exclusively on the **Control group (healthy brains)**, splitting them into:
    * **Group A:** Controls without a respiratory infection (Our baseline).
    * **Group B:** Controls with a respiratory infection at the time of death.

## 🧠 Methodology
Instead of using standard differential expression analysis, we approached this as an **Anomaly Detection** problem using an Autoencoder neural network. 
1. **Training:** We trained the model exclusively on Group A (no infection) so it could learn the pattern of a "peaceful, normal" brain.
2. **Testing:** We passed Group B (with infection) through the model to see if it would recognize the data as out of the ordinary.
3. **Extraction:** By isolating the genes that caused the highest reconstruction errors, we aimed to find the specific molecular pathways that activate to protect the brain from systemic stress.

## 🔬 Preliminary Conclusions
For a small learning project, the computational results were surprisingly clear:
* **Significant Anomaly Detected:** The Autoencoder's reconstruction error jumped dramatically (from an average of ~0.05 in the baseline to ~0.76 in the infected group). This confirms that a peripheral infection heavily alters the brain's gene expression, and the algorithm can clearly spot the difference.
* **Biological Hints:** A preliminary Gene Ontology analysis (via gProfiler) on the most anomalous genes highlighted an enrichment in **DNA-binding** and **nucleobase metabolic processes**. This suggests that a healthy brain responds to systemic infections by initiating a massive transcriptional reprogramming—acting as a molecular shield to maintain homeostasis.

## ⚠️ Limitations and Challenges
As an exploratory project, it is crucial to recognize several biological and technical limitations:

1. **Sample Size:** By excluding Alzheimer's patients, the dataset is limited to 89 Control samples. Dividing these into "Infected" and "Non-Infected" subgroups creates very small cohorts. Neural networks (like Autoencoders) are data-hungry and may be prone to overfitting with such limited input.
2. **Bulk RNA-seq vs. Single-Cell:** The `GSE313307` dataset uses "Bulk" sequencing, which provides an average expression across all cell types in the prefrontal cortex. We cannot determine if this "resilience shield" is activated specifically by neurons, astrocytes, microglia, or endothelial cells.
3. **Confounding Factors:** The metadata only indicates the presence of a "respiratory infection" without specifying the pathogen (viral vs. bacterial), severity, or duration. Other variables like Post-Mortem Interval (PMI), exact age, or medication history were not controlled for in this simplified model.
4. **Correlation vs. Causation:** The model detected that the transcriptome of infected patients is an "anomaly." However, this is a correlation. We cannot biologically prove if these genes cause a neuroprotective effect or if they are simply a byproduct of systemic end-of-life stress.
5. **Lack of Experimental Validation:** This is a purely *in silico* analysis. Any functional hypotheses regarding DNA-binding or metabolic shifts would require *in vitro* or *in vivo* laboratory experiments to confirm their actual protective role.

## 💻 Requirements
To run the analysis, you will need Python 3 and the following libraries:
* `pandas`, `numpy`, `scikit-learn`, `torch`, `matplotlib`, `seaborn`