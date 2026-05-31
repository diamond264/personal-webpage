+++
widget = "blank"
headless = true
active = true
weight = 50

title = "Service"
subtitle = ""

[design]
  columns = "1"
[design.spacing]
  padding = ["35px", "0", "45px", "0"]
+++
<style>
div.service-wrap {
  font-size: 13pt;
  margin-left: 15%;
  margin-right: 15%;
  width: 70%;
}
.service-category {
  font-size: 13pt;
  font-weight: bold;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
}
.service-category:first-child {
  margin-top: 0;
}
.service-row {
  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1.5rem;
  margin-bottom: 0.2rem;
  align-items: baseline;
}
.service-venue {
  font-size: 13pt;
}
.service-years {
  font-size: 13pt;
  white-space: nowrap;
  color: #555;
}
@media only screen and (max-width: 992px) {
  div.service-wrap {
    margin-left: 1rem;
    margin-right: 1rem;
    width: calc(100% - 2rem);
  }
  .service-row {
    grid-template-columns: 1fr auto;
    column-gap: 0.75rem;
  }
}
</style>

<div class="service-wrap">

<div class="service-category">Organizer</div>
<div class="service-row">
  <span class="service-venue"><a href="https://wellcomp2026.github.io/index.html">WellComp 2026</a> @ <a href="https://www.ubicomp.org/ubicomp-iswc-2026/">UbiComp/ISWC '26</a></span>
  <span class="service-years">2026</span>
</div>

<div class="service-category">Reviewer</div>
<div class="service-row">
  <span class="service-venue">NeurIPS</span>
  <span class="service-years">2026</span>
</div>
<div class="service-row">
  <span class="service-venue">ACM CHI Posters</span>
  <span class="service-years">2026</span>
</div>
<div class="service-row">
  <span class="service-venue">ACL ARR</span>
  <span class="service-years">2026</span>
</div>
<div class="service-row">
  <span class="service-venue">ACM MobiCom</span>
  <span class="service-years">2020 – 2026</span>
</div>
<div class="service-row">
  <span class="service-venue">ACM MobiSys</span>
  <span class="service-years">2021, 2023 – 2025</span>
</div>
<div class="service-row">
  <span class="service-venue">ACM UbiComp</span>
  <span class="service-years">2022, 2025</span>
</div>
<div class="service-row">
  <span class="service-venue">ACM UIST</span>
  <span class="service-years">2025</span>
</div>
<div class="service-row">
  <span class="service-venue">ICML</span>
  <span class="service-years">2025</span>
</div>
<div class="service-row">
  <span class="service-venue">IEEE IoT-J</span>
  <span class="service-years">2025</span>
</div>
<div class="service-row">
  <span class="service-venue">IEEE TCCN</span>
  <span class="service-years">2025</span>
</div>
<div class="service-row">
  <span class="service-venue">ACM SIGCOMM</span>
  <span class="service-years">2023</span>
</div>
<div class="service-row">
  <span class="service-venue">IEEE INFOCOM</span>
  <span class="service-years">2021 – 2022</span>
</div>

</div>
