# md-links-thatmare

## Table of Contents

* [1. Description](#1-description)
* [2. Install](#2-install)
* [3. Usage](#3-usage)

***

## 1. Description

`md-links-thatmare` is a library and a command-line interface to analyze the links in Mardown files. This project was developed with Node.js filesystem and Axios. 

With this package you're able to:
* Identify links.
* Validate links HTTP status.
* Get statistics about the links. 

[Check the npm package published here](https://www.npmjs.com/package/md-links-thatmare)

## 2. Install

If you already have Node, just run `npm install md-links-thatmare`. 

## 3. Usage
### 3.1 Command-line interface

* `md-links --help`
To print the usage instructions:

![image](https://github.com/thatmare/md-links/assets/113146161/82d96329-249b-41f3-a221-ad38415a5d62)

* `md-links <path>`
You can analyze files or directories with a relative or absolute path.

![image](https://github.com/thatmare/md-links/assets/113146161/e08ac689-2942-4711-85af-9ee50e39d541)

* `md-links <path> --validate`
Gives you the HTTP status and message.

![image](https://github.com/thatmare/md-links/assets/113146161/0422a11a-869c-40ad-93ac-546688961371)

* `md-links <path> --stats`
Counts the total and unique links.

![image](https://github.com/thatmare/md-links/assets/113146161/78c5feab-3335-4aa9-be53-293b92580913)

* `md-links <path> --stats --validate`
Counts the total, unique and broken links.

![image](https://github.com/thatmare/md-links/assets/113146161/3367e7b3-1481-45d4-9527-0ac44ffb7709)

### 3.2 Library

1. Require the module `md-links-thatmare`.

![image](https://github.com/thatmare/md-links/assets/113146161/7ab16c1c-2977-432c-8c6d-141fce0ac89e)

2. You'll have acces to two functions: `mdLinks` and `linksToAnalyze`.
2.1 `mdLinks(<path>, { validate: boolean } )`
* If `false`, returns an array of objects with title, link and path keys.
* If `true`, returns an array of objects with title, link, path, status and message keys.

![image](https://github.com/thatmare/md-links/assets/113146161/cb339f3a-7731-4a16-891b-e89ab2d0e8ff)

![image](https://github.com/thatmare/md-links/assets/113146161/94ad8cfc-367f-4470-82a3-b48894d1d8f3)

2.2 `linksToAnalyze(<path>)`
Returns an array of objects with title, link and path keys. 

![image](https://github.com/thatmare/md-links/assets/113146161/ae63dfac-1dc1-4715-a324-dd9dcba512c0)


