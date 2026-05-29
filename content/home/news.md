+++
widget = "blank"
headless = true
active = true
weight = 10

title = "News"
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
[design.spacing]
  padding = ["35px", "0", "45px", "0"]
+++
<style>
    ul.news {
        font-size: 13pt;
        margin-left: 15%;
        margin-right: 15%;
        width: 70%;
        list-style: none;
        padding-left: 0;
    }
    ul.news li {
        display: grid;
        grid-template-columns: 4.00rem auto 1fr;
        column-gap: 0.5rem;
        margin-bottom: 0.4rem;
        align-items: baseline;
    }
    .news-date {
        font-weight: bold;
        white-space: nowrap;
    }
    .news-sep {
        white-space: nowrap;
    }
    ul.news li.news-more {
        display: none;
    }
    ul.news.expanded li.news-more {
        display: grid;
    }
    .news-toggle-wrap {
        margin-left: 15%;
        margin-right: 15%;
        width: 70%;
        text-align: center;
        margin-top: 0.75rem;
    }
    button.news-toggle {
        font-size: 13pt;
        font-weight: 500;
        color: #0066cc;
        background: #f0f6ff;
        border: 1px solid #b3d4ff;
        border-radius: 4px;
        padding: 0.4rem 1rem;
        cursor: pointer;
    }
    button.news-toggle:hover {
        color: #004499;
        background: #e3efff;
        border-color: #0066cc;
        text-decoration: none;
    }
    @media only screen and (max-width: 992px) {
        ul.news {
            font-size: 12pt;
            margin-left: 0%;
            margin-right: 0%;
            width: 100%;
        }
        ul.news li {
            grid-template-columns: 5.75rem auto 1fr;
            column-gap: 0.2rem;
        }
        .news-toggle-wrap {
            margin-left: 0%;
            margin-right: 0%;
            width: 100%;
        }
    }
</style>

<ul class="news" id="news-list">
<li><span class="news-date">Jul. 2026</span><span class="news-sep">|</span><span class="news-content">🛫 ICML '26 @ Seoul, South Korea (Jul. 9 - Jul. 11)</span></li>
<li><span class="news-date">Jun. 2026</span><span class="news-sep">|</span><span class="news-content">🛫 AHLI Health AI Summer Camp @ Seattle, USA (Jun. 22 - Jun. 28)</span></li>
<li><span class="news-date">May. 2026</span><span class="news-sep">|</span><span class="news-content">🎓 Passed my Ph.D. Dissertation Defense (committee: Prof. <a href="https://sites.google.com/site/wewantsj/">Sung-Ju Lee</a>, Prof. <a href="https://mp2893.com/">Edward Choi</a>, Prof. <a href="https://sites.google.com/view/kiminlee">Kimin Lee</a>, Prof. <a href="https://home.cse.ust.hk/~lim/">Mo Li</a>, Prof. <a href="https://www.cs.utexas.edu/~lili/">Lili Qiu</a>)</span></li>
<li><span class="news-date">May. 2026</span><span class="news-sep">|</span><span class="news-content">🎉 Accepted to <a href="https://ahli.cc/summercamp/">AHLI Health AI Summer Camp</a> with full scholarship</span></li>
<li><span class="news-date">May. 2026</span><span class="news-sep">|</span><span class="news-content">🎤 Invited talk at KAIST AI (host: Prof. <a href="https://seongjoonoh.com/">Seong Joon Oh</a>)</span></li>
<li><span class="news-date">May. 2026</span><span class="news-sep">|</span><span class="news-content">👔 Organizer at <a href="https://wellcomp2026.github.io/index.html">WellComp 2026</a> @ <a href="https://www.ubicomp.org/ubicomp-iswc-2026/">UbiComp/ISWC '26</a></span></li>
<li><span class="news-date">Apr. 2026</span><span class="news-sep">|</span><span class="news-content">🛫 ICLR '26 @ Rio de Janeiro, Brazil (Apr. 23 - Apr. 27)</span></li>
<li><span class="news-date">Apr. 2026</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to ACL '26 (findings)</span></li>
<li><span class="news-date">Jan. 2026</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to IEEE PacificVis '26</span></li>
<li><span class="news-date">Jan. 2026</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to ICLR '26</span></li>
<li><span class="news-date">Dec. 2025</span><span class="news-sep">|</span><span class="news-content">🛫 NeurIPS '25 @ San Diego, USA (Dec. 2 - Dec. 7)</span></li>
<li><span class="news-date">Nov. 2025</span><span class="news-sep">|</span><span class="news-content">🏆 Selected as Winner of the <a href="https://www.qualcomm.com/research/university-relations/innovation-fellowship/winners">Qualcomm Innovation Fellowship</a></span></li>
<li><span class="news-date">Nov. 2025</span><span class="news-sep">|</span><span class="news-content">🎤 Invited talk at KAIST Mobile Computing Course</span></li>
<li><span class="news-date">Oct. 2025</span><span class="news-sep">|</span><span class="news-content">🏆 Selected as Finalist of the <a href="https://www.qualcomm.com/research/university-relations/innovation-fellowship/finalists">Qualcomm Innovation Fellowship</a></span></li>
<li><span class="news-date">Sep. 2025</span><span class="news-sep">|</span><span class="news-content">I am serving as the lab leader of <a href="https://miil.kaist.ac.kr/">Mobile Intelligence & Interaction Lab</a></span></li>
<li><span class="news-date">Jun. 2025</span><span class="news-sep">|</span><span class="news-content">👨‍💻 Research internship at <a href="https://www.nokia.com/bell-labs/research/">Nokia Bell Labs</a> (Mentor <a href="https://lorenaqendro.github.io/">Lorena Qendro</a>)</span></li>
<li><span class="news-date">May. 2025</span><span class="news-sep">|</span><span class="news-content">🛫 SenSys '25 @ Irvine, USA (May. 5 - May. 9)</span></li>
<li><span class="news-date">May. 2025</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to MobiSys Workshop (EnvSys) '25</span></li>
<li><span class="news-date">Apr. 2025</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to IEEE TMC '25</span></li>
<li><span class="news-date">Mar. 2025</span><span class="news-sep">|</span><span class="news-content">🎤 Invited talk at UNIST (host: Prof. <a href="https://taesikgong.com/">Taesik Gong</a>)</span></li>
<li><span class="news-date">Feb. 2025</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to SenSys '25</span></li>
<li><span class="news-date">Feb. 2025</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to ACM CHI '25 EA</span></li>
<li><span class="news-date">Nov. 2024</span><span class="news-sep">|</span><span class="news-content">🛫 EMNLP '24 @ Miami, USA (Nov. 12 - Nov. 16)</span></li>
<li><span class="news-date">Nov. 2024</span><span class="news-sep">|</span><span class="news-content">🎤 Invited talk at MSRA</span></li>
<li><span class="news-date">Sep. 2024</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to UbiComp '25</span></li>
<li><span class="news-date">Sep. 2024</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to EMNLP '24 (main)</span></li>
<li><span class="news-date">Sep. 2024</span><span class="news-sep">|</span><span class="news-content">👨‍💻 Research internship at <a href="https://www.microsoft.com/en-us/research/lab/microsoft-research-asia/">Microsoft Research</a> (Mentor Prof. <a href="https://www.microsoft.com/en-us/research/people/liliqiu/">Lili Qiu</a>)</span></li>
<li><span class="news-date">Oct. 2023</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to EMNLP '23 (main)</span></li>
<li><span class="news-date">Sep. 2022</span><span class="news-sep">|</span><span class="news-content">Visiting researcher at <a href="https://www.ntu.edu.sg/">NTU</a>, Singapore (Advisor Prof. <a href="https://personal.ntu.edu.sg/limo/">Mo Li</a>) (by Dec. 2022)</span></li>
<li><span class="news-date">May. 2022</span><span class="news-sep">|</span><span class="news-content">🛫 ACM CHI '22 @ New Orleans, USA (Apr. 30 - May. 5)</span></li>
<li><span class="news-date">Mar. 2022</span><span class="news-sep">|</span><span class="news-content">🏆 Honorable Mention at ACM CHI '22</span></li>
<li><span class="news-date">Nov. 2021</span><span class="news-sep">|</span><span class="news-content">🎉 Paper accepted to ACM CHI '22</span></li>
<li><span class="news-date">Mar. 2021</span><span class="news-sep">|</span><span class="news-content">🎓 Started my Ph.D. in <a href="https://miil.kaist.ac.kr/">Mobile Intelligence & Interaction Lab</a></span></li>
<li><span class="news-date">Mar. 2020</span><span class="news-sep">|</span><span class="news-content">🎓 Started my M.S. in <a href="https://miil.kaist.ac.kr/">Mobile Intelligence & Interaction Lab</a></span></li>
<li><span class="news-date">Feb. 2020</span><span class="news-sep">|</span><span class="news-content">🎓 Graduated from KAIST as B.S. (Cum Laude)</span></li>
</ul>
<div class="news-toggle-wrap">
<button class="news-toggle" id="news-toggle" type="button" aria-expanded="false" aria-controls="news-list">Show more</button>
</div>
<script src="/js/news-expand.js"></script>
