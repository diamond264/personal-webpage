(function () {
  var list = document.getElementById('news-list');
  var toggle = document.getElementById('news-toggle');
  var wrap = toggle && toggle.parentElement;
  if (!list || !toggle || !wrap) return;

  var visibleCount = 15;
  var items = list.querySelectorAll('li');
  items.forEach(function (item, index) {
    if (index >= visibleCount) {
      item.classList.add('news-more');
    }
  });

  var hiddenCount = Math.max(items.length - visibleCount, 0);
  if (hiddenCount === 0) {
    wrap.style.display = 'none';
    return;
  }

  function setCollapsedLabel() {
    toggle.textContent = 'Show more';
    toggle.setAttribute('aria-expanded', 'false');
  }

  setCollapsedLabel();
  toggle.addEventListener('click', function () {
    var expanded = list.classList.toggle('expanded');
    if (expanded) {
      toggle.textContent = 'Show less';
      toggle.setAttribute('aria-expanded', 'true');
    } else {
      setCollapsedLabel();
    }
  });
})();
