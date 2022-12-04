# the-hack-2022-nov-team-6

# 起動方法
## 環境変数
NOTION_DATABASE_IDとNOTION_ACCESS_TOKENを環境変数に入れて起動してください。  
値はnotionのデータベース>環境変数のページに記載しています。
```
export NOTION_DATABASE_ID=[NOTION_DATABASE_IDに変えてください]
export NOTION_ACCESS_TOKEN=[NOTION_ACCESS_TOKENに変えてください]
```

## 決まりごと

### git運用
#### github-flow

[参考ドキュメント](https://gist.github.com/Gab-km/3705015)

- 新しい機能を追加する際は、名前/機能名のブランチをmainから作成する（例:neon/common_component_header）
- レビューやブランチをマージしたいときは、プルリクエストを作成する
- 他のチームメンバがapproveしたら、mainへマージすることができる

