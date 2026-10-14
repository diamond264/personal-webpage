+++
widget = "blank"
headless = true
active = true
weight = 1

title = ""
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
[design.spacing]
  padding = ["25px", "0", "35px", "0"]
+++

<style>
    .bio_links {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem 0.75rem;
        align-items: center;
    }

    div.full {
        display: flex;
        gap: 35px;
        align-items: center;
        font-size: 13pt;
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        margin-top: 20px;
    }

    div.bio {
        flex: 1;
        min-width: 0;
    }

    div.bio_contents {
        position: static;
    }

    div.profile {
        flex: 0 0 30%;
        text-align: center;
    }

    div.img_container {
        width: 100%;
    }

    .center-cropped {
        width: 230px;
        height: 230px;
        margin-bottom: 15px;
        background-position: center center;
        background-repeat: no-repeat;
    }

    @media only screen and (max-width: 992px) {
        .center-cropped {
            width: 70%;
            height: 70%;
            margin-right: 15%;
            margin-left: 15%;
        }
        div.profile {
            flex: none;
            width: 70%;
            height: initial;
            margin-right: 15%;
            margin-left: 15%;
            margin-bottom: 20px;
        }
        div.bio {
            flex: none;
            width: 80%;
            margin-right: 10%;
            margin-left: 10%;
            float: left;
            vertical-align: middle;
            align-items: initial;
            position: initial;
        }
        div.bio_contents {
            position: initial;
        }
        .bio_links {
            justify-content: center;
        }
        div.full {
            flex-direction: column;
            gap: 0;
            font-size: 12pt;
            text-align:center;
            margin-left: 0%;
            margin-right: 0%;
            width: 100%;
            height: 100%;
            margin-top: 20px;
            vertical-align: middle;
            align-items: center;
        }
    }
</style>

<div class="full">
<div class="profile">
<div class="img_container"><center>
<img src="authors/admin/hjyoon_2024_cropped.jpg" alt="Hyungjun Yoon"
    class="img-thumbnail rounded rounded-circle center-cropped">
</center></div>

<h3>{{< param admin.name >}}</h3>
<p>{{< param admin.role >}}</p>
</div>

<div class="bio">
<div class="bio_contents">
<p>I am a postdoctoral researcher in the <a class="text" href="https://miil.kaist.ac.kr/">Mobile Intelligence &amp; Interaction Lab</a> at <a class="text" href="https://www.kaist.ac.kr/en/">KAIST</a>, working with Professor <a class="text" href="https://sites.google.com/site/wewantsj/">Sung-Ju Lee</a>. I received my Ph.D. in Electrical Engineering from KAIST in 2026. Previously, I was a research intern at <a class="text" href="https://www.nokia.com/bell-labs/research/">Nokia Bell Labs</a> (mentored by <a class="text" href="https://lorenaqendro.github.io/">Lorena Qendro</a> and hosted by <a class="text" href="https://www.fahim-kawsar.net/">Fahim Kawsar</a>) and Microsoft Research (mentored by Professor <a class="text" href="https://www.cs.utexas.edu/~lili/">Lili Qiu</a>), and a visiting researcher at <a href="https://www.ntu.edu.sg/">NTU</a> (advised by Professor <a class="text" href="https://home.cse.ust.hk/~lim/">Mo Li</a>).</p>

<p>I develop <b>Foundation Models</b> and <b>LLM Agents</b> to understand people through mobile, wearable, and physiological data. I study how models can generalize across sensors and applications, adapt to individual users, and use tools and personal context to reason about health. I build systems end to end, from sensing hardware and data collection to on-device deployment and user studies. My current focus is <b>personalized health agents</b> and <b>harness optimization</b>: improving how agents select data, use tools, and verify their answers.</p>

<hr />
<div class="bio_links">
<a href="https://drive.google.com/file/d/1uFNU_t1R9M4W56_NnuM137mmNZT0q2fg/view?usp=sharing">{{< icon name="file" pack="fas" >}} CV</a>
<a href="mailto:hyungjun.yoon@kaist.ac.kr">{{< icon name="envelope" pack="fas" >}} Email</a>
<a href="https://github.com/diamond264">{{< icon name="github" pack="fab" >}} Github</a>
<a href="https://scholar.google.com/citations?user=a7PribYAAAAJ&hl=ko">{{< icon name="google" pack="fab" >}} Scholar</a>
<a href="https://x.com/hyung_jun_yoon">{{< icon name="twitter" pack="fab" >}} X</a>
<a href="https://kr.linkedin.com/in/hyungjun-yoon-b78716165">{{< icon name="linkedin" pack="fab" >}} LinkedIn</a>
</div>
</div>
</div>
</div>
