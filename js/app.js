const title = document.querySelector("#title");
const platform = navigator.platform;
const pdf_url = "../prekurs_ssylki_na_stati.pdf";
title.textContent = navigator.platform;

if (platform.includes("aarch64")) {
  Intent browserIntent = new Intent(Intent.ACTION_VIEW, Uri.parse(pdf_url));
  startActivity(browserIntent);
}
