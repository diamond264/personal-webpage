+++
widget = "blank"
headless = true
active = true
weight = 10

title = ""
subtitle = ""

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"
+++

<style>
    .tab { white-space: pre; }

    body {
        font-size: 13pt;
        margin-left: 10%;
        margin-right: 10%;
    }

    a.text {
        text-decoration: underline;
    }

    div.full {
        width: 100%;
        height: 100%;
        margin-top: 50px;
        horizontal-align: middle;
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
        body {
            font-size: 12pt;
            text-align:center;
            margin-left: 0%;
            margin-right: 0%;
        }
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
            height: 100%;
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
            width: 100%;
            height: 100%;
            margin-top: 50px;
            horizontal-align: initial;
            vertical-align: middle;
            align-items: center;
        }
    }
</style>

<div class="full">
<div class="profile">
<div class="img_container"><center>
<img src="authors/admin/profile.png" alt="Hyungjun Yoon"
    class="img-thumbnail rounded rounded-circle center-cropped">
</center></div>

<h3>{{< param admin.name >}}</h3>
<p>{{< param admin.role >}}</p>
</div>

<div class="bio">
<div class="bio_contents">
I am a Ph.D. student in <a class="text" href="https://nmsl.kaist.ac.kr/">Networking & Mobile Systems Lab</a> at <a class="text" href="https://www.kaist.ac.kr/en/">Korea Advanced Institute of Science and Technology (KAIST)</a>, advised by Professor <a class="text" href="https://sites.google.com/site/wewantsj/">Sung-Ju Lee</a>. My research interest is in Mobile Sensing and Machine Learning.

<hr />
<a href=".">{{< icon name="file" pack="fas" >}} CV</a><span class="tab">&#9;</span>
<a href="mailto:hyungjun.yoon@kaist.ac.kr">{{< icon name="envelope" pack="fas" >}} Email</a><span class="tab">&#9;</span>
<a href="https://github.com/diamond264">{{< icon name="github" pack="fab" >}} Github</a><span class="tab">&#9;</span>
<a href="https://scholar.google.com/citations?user=a7PribYAAAAJ&hl=ko">{{< icon name="google" pack="fab" >}} Scholar</a><span class="tab">&#9;</span>
<a href="https://twitter.com/hyung_jun_yoon">{{< icon name="twitter" pack="fab" >}} Twitter</a>
</div>
</div>
</div>