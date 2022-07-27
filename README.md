# Kubernetes CronJob Sample

CronJob動作検証用サンプルプログラムです。

## [webapp](webapp/)

CronJobから呼び出されるWebAPIアプリです。Node.js Expressで実装しています。

API一覧

|URL|概要|
|---|---|
|`/wait/:seconds`|指定された秒数待ってからレスポンスします。|

## Node.jsのバージョン

現在のバージョンは「16.15.0」です。変更する場合は下記ファイルを編集します。

- [.node-version](.node-version)
