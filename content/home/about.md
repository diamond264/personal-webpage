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
+++

<style>
    .tab { white-space: pre; }

    a.text {
        text-decoration: underline;
    }

    div.full {
        font-size: 13pt;
        margin-left: 10%;
        margin-right: 10%;
        width: 80%;
        height: 100%;
        margin-top: 50px;
    }

    div.bio {
        /* height: 100%; */
        width: 65%;
        height: 100%;
        margin-left: 35px;
        float: left;
        vertical-align: middle;
        align-items: center;
        position: relative;
    }

    div.bio_contents {
        position: absolute;
        top: 40%;
        -ms-transform: translateY(-40%);
        transform: translateY(-40%);
    }

    div.profile {
        width: 30%;
        height: 100%;
        float: left;
        align-items: center;
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
            width: 70%;
            height: initial;
            margin-right: 15%;
            margin-left: 15%;
            margin-bottom: 20px;
        }
        div.bio {
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
            top: initial%;
            -ms-transform: initial;
            transform: initial;
        }
        div.full {
            font-size: 12pt;
            text-align:center;
            margin-left: 0%;
            margin-right: 0%;
            width: 100%;
            height: 100%;
            margin-top: 50px;
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
I am a Ph.D. student in <a class="text" href="https://nmsl.kaist.ac.kr/">Networking & Mobile Systems Lab</a> at <a class="text" href="https://www.kaist.ac.kr/en/">KAIST</a>, advised by Professor <a class="text" href="https://sites.google.com/site/wewantsj/">Sung-Ju Lee</a>. I am currently doing my research internship at <a class="text" href="https://www.nokia.com/bell-labs/research/">Nokia Bell Labs</a> (Mentor <a class="text" href="https://lorenaqendro.github.io/">Lorena Qendro</a>), hosted by <a class="text" href="https://www.fahim-kawsar.net/">Fahim Kawsar</a>. Previously, I was a research intern at Microsoft Research, mentored and hosted by Professor <a class="text" href="https://www.microsoft.com/en-us/research/people/liliqiu/">Lili Qiu</a>, and a visiting researcher at <a href="https://www.ntu.edu.sg/">NTU</a>, advised by Professor <a class="text" href="https://personal.ntu.edu.sg/limo/">Mo Li</a>. I'm interested in <b>Applied Machine Learning</b>, <b>Mobile Sensing</b>, and <b>Foundation Models</b> including <b>Large Language Models</b>. I enjoy exploring how the techniques can be used for real-world problems.

<hr />
<a href="https://drive.google.com/file/d/1uFNU_t1R9M4W56_NnuM137mmNZT0q2fg/view?usp=sharing">{{< icon name="file" pack="fas" >}} CV  &nbsp;</a><span class="tab">&#9;</span>
<a href="mailto:hyungjun.yoon@kaist.ac.kr">{{< icon name="envelope" pack="fas" >}} Email  &nbsp;</a><span class="tab">&#9;</span>
<a href="https://github.com/diamond264">{{< icon name="github" pack="fab" >}} Github </a><span class="tab">&#9;</span>
<a href="https://scholar.google.com/citations?user=a7PribYAAAAJ&hl=ko">{{< icon name="google" pack="fab" >}} Scholar  &nbsp;</a><span class="tab">&#9;</span>
<a href="https://x.com/hyung_jun_yoon">{{< icon name="twitter" pack="fab" >}} X  &nbsp;</a>
<a href="https://kr.linkedin.com/in/hyungjun-yoon-b78716165">{{< icon name="linkedin" pack="fab" >}} LinkedIn  &nbsp;</a>
</div>
</div>
</div>