# Объяснение файла `kex-config.json`

## Введение

Начиная с KernelExtension `RELEASE 4.0`, вы можете улучшить свой опыт использования KEX, создав новый специальный файл в директории вашего мода под названием `kex-config.json`. Он упростит для KEX поиск разных непрограммных файлов в директории вашего мода, которые используются в игре, без необходимости вызова каких-либо дополнительных методов в коде вашего мода.

## Параметры KEX-конфига

### _**kex-config.json**_

```jsonc
{
    "resources": [ "kex-res/" ] // путь к директории ресурсов KEX относительно пути к директории вашего мода
}
```

По состоянию на KEX 4.0, `kex-config.json` принимает только один параметр `"resources"`, который используется для поиска одной или нескольких директорий ресурсов KEX внутри директории вашего мода. Это может быть строка, если у вас одна директория ресурсов KEX, или массив строк, если у вас их несколько. Путь должен быть _**относительно пути к директории вашего мода**_ и должен заканчиватся на слэш (_**`/`**_).

### Структура директории ресурсов KEX

***

#### _**Директория ресурсов KEX**_

┃&mdash; **lang**
<br/>
┃&nbsp;&nbsp;&nbsp;&nbsp;┃&mdash; **`en_us.json`**
<br/>
┃&nbsp;&nbsp;&nbsp;&nbsp;╹&mdash; **`ru_ru.json`**
<br/>
┃&mdash; **blockstates**
<br/>
┃&nbsp;&nbsp;&nbsp;&nbsp;╹&mdash; **`my_block.json`**
<br/>
╹&mdash; **models**
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃&mdash; **block**
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;┃&nbsp;&nbsp;&nbsp;&nbsp;╹&mdash; **`my_block_model.json`**
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╹&mdash; **item**
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;╹&mdash; **`my_item.json`**

На данный момент есть только две вещи, ради которых вы можете сделать в вашем моде директорию ресурсов KEX: `lang`-файлы и JSON-модели блоков и предметов. Последнее подробно объяснено в [этой статье](/ru/pages/guides/fulljava/models.md).

Говоря о `lang`-ах, это просто альтернативное решение для вызова [KEX.I18n.addLangDir](https://dmhyt.github.io/kex-docs/api/modules/KEX.I18n.html#addLangDir) для добавления вашей директории, содержащей файлы ванильной локализации. Например, если вы создали `kex-config.json` с параметром `"resources"`, установленным как `"kex-res/"` и создали папку `"lang/"` в `"директория_вашего_мода/kex-res/"`, вам не понадобится дополнительно писать этот JS/TS-код:

```js
KEX.I18n.addLangDir(`${__dir__}/kex-res/lang/`)
```