var logo_linux_default = "https://img.icons8.com/color/48/000000/linux--v1.png"
var win11_download_default = "https://microsoft.com/software-download/windows11"
var win10_download_default = "https://microsoft.com/software-download/windows10"
var ubuntu_download_default = "https://ubuntu.com"
var fedora_download_default = "https://getfedora.org"
var unsupported_download_default = "https://example.org"
var logo_apple_default = "https://img.icons8.com/ios-filled/50/000000/mac-os.png"

let oslist = [
  {
    logo: "https://img.icons8.com/fluency/48/000000/windows-11.png",
    name: "Windows 11 Insider Preview (Dev)",
    type: "Insider Preview",
    build: "22557.1",
    codename: "N/A",
    rel: "N/A",
    eol: "N/A",
    platform: "x64, ARM",
    download: unsupported_download_default,
  },
  {
    logo: "https://img.icons8.com/fluency/48/000000/windows-11.png",
    name: "Windows 11",
    type: "Stable",
    build: "21H2",
    codename: "Sun Valley",
    rel: "2021",
    eol: "N/A",
    platform: "x64, ARM",
    download: win11_download_default,
  },
  {
    logo: "https://img.icons8.com/color/48/000000/windows-10.png",
    name: "Windows 10 (21H2)",
    type: "Stable",
    build: "21H2",
    codename: "N/A",
    rel: "2021",
    eol: "2025",
    platform: "x64, x32, ARM",
    download: win10_download_default,
  },
  {
    logo: "https://img.icons8.com/color/48/000000/windows-10.png",
    name: "Windows 10",
    type: "Stable",
    build: "21H1",
    codename: "Redstone",
    rel: "2015",
    eol: "2025",
    platform: "x64, x32, ARM",
    download: win10_download_default,
  },
  {
    logo: "https://img.icons8.com/color/48/000000/windows8.png",
    name: "Windows RT",
    type: "N/A",
    build: "6.3.9600",
    codename: "RT",
    rel: "October 26th, 2012",
    eol: "January 10th, 2023",
    platform: "ARM",
    download: unsupported_download_default,
  },
  {
    logo: "https://img.icons8.com/color/48/000000/windows8.png",
    name: "Windows 8/8.1",
    type: "Stable",
    build: "NT 6.2",
    codename: "Blue",
    rel: "2013",
    eol: "2023",
    platform: "x64, x32 ARM",
    download: unsupported_download_default,
  },
  {
    logo: "https://www.logo.wine/a/logo/Windows_7/Windows_7-Logo.wine.svg",
    name: "Windows 7",
    type: "Stable",
    build: "NT 6.1",
    codename: "Blackcomb",
    rel: "2009",
    eol: "2020",
    platform: "x64, x32",
    download: unsupported_download_default,
  },
  {
    logo: "https://img.icons8.com/color/48/000000/windows-logo.png",
    name: "Windows XP",
    type: "Stable",
    build: "NT 5.1",
    codename: "Whistler",
    rel: "2001",
    eol: "2014",
    platform: "x64, x32",
    download: unsupported_download_default,
  },
  {
    logo: logo_linux_default,
    name: "Ubuntu 20.04",
    type: "LTS",
    build: "UBULINUX",
    codename: "Focal Fossa",
    rel: "April 2020",
    eol: "April 2030",
    platform: "x64, x32, arm64",
    download: ubuntu_download_default,
  },
  {
    logo: logo_linux_default,
    name: "Ubuntu 21.04",
    type: "LTS",
    build: "UBULINUX",
    codename: "Hirsute Hippo",
    rel: "April 2021",
    eol: "January 2022",
    platform: "x64, x32, arm64",
    download: ubuntu_download_default,
  },
  {
    logo: logo_linux_default,
    name: "Fedora 35",
    type: "Stable",
    build: "35.0",
    codename: "N/A",
    rel: "November 2, 2021",
    eol: "December 2022",
    platform: "x32, x64, arm64",
    download: fedora_download_default,
  },
  {
    logo: logo_apple_default,
    name: "WatchOS 8.4.2",
    type: "Stable",
    build: "8.4.2",
    codename: "N/A",
    rel: "September 20, 2021",
    eol: "N/A",
    platform: "N/A",
    download: unsupported_download_default,
  },
];
export default oslist;
