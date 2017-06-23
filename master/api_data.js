define({ "api": [
  {
    "type": "get",
    "url": "/clairvoyance/search/by-company",
    "title": "依據職稱搜尋工時資訊",
    "group": "Clairvoyance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company",
            "description": "<p>搜尋的公司關鍵字（名稱、統編皆可）</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>頁碼，從 0 開始</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>頁碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_count",
            "description": "<p>總計數量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>總計頁數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workings",
            "description": "<p>資料集</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workings.company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workings.company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workings.company.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "workings.created_at",
            "description": "<p>建立時間</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workings.job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workings.week_work_time",
            "description": "<p>最近一週工作時數</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/clairvoyance/search.js",
    "groupTitle": "Clairvoyance",
    "name": "GetClairvoyanceSearchByCompany"
  },
  {
    "type": "get",
    "url": "/clairvoyance/search/by-job",
    "title": "依據職稱搜尋工時資訊",
    "group": "Clairvoyance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>搜尋的職稱關鍵字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>頁碼，從 0 開始</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "page",
            "description": "<p>頁碼</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_count",
            "description": "<p>總計數量</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total_page",
            "description": "<p>總計頁數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "workings",
            "description": "<p>資料集</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workings.company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workings.company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "workings.company.name",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "workings.created_at",
            "description": "<p>建立時間</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "workings.job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "workings.week_work_time",
            "description": "<p>最近一週工作時數</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/clairvoyance/search.js",
    "groupTitle": "Clairvoyance",
    "name": "GetClairvoyanceSearchByJob"
  },
  {
    "type": "get",
    "url": "/companies/search",
    "title": "Search Company",
    "name": "SearchCompany",
    "group": "Company",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": "<p>Companies</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/companies/index.js",
    "groupTitle": "Company"
  },
  {
    "type": "get",
    "url": "/experiences",
    "title": "查詢面試及工作經驗 API",
    "group": "Experiences",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "search_query",
            "description": "<p>搜尋字串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"company\"",
              "\"job_title\""
            ],
            "optional": true,
            "field": "search_by",
            "defaultValue": "company",
            "description": "<p>選擇以公司 or 職稱搜尋</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"created_at\"",
              "\"popularity\""
            ],
            "optional": true,
            "field": "sort",
            "defaultValue": "“created_at\"",
            "description": "<p>排序方式。最新 or 熱門經驗</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"0 <= start \""
            ],
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>從第 start + 1 筆資料開始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < limit <=100 \""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>最多回傳limit筆資料</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"interview\"",
              "\"work\"",
              "\"interview,work\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "“interview,work”",
            "description": "<p>搜尋的種類</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>總資料數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "experiences",
            "description": "<p>經驗資料</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences._id",
            "description": "<p>經驗分享 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"interview\"",
              "\"work\""
            ],
            "optional": false,
            "field": "experiences.type",
            "description": "<p>經驗類別</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.created_at",
            "description": "<p>資料填寫時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiences.company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "experiences.company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.company.name",
            "description": "<p>公司名稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.title",
            "description": "<p>標題</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "experiences.preview",
            "description": "<p>整篇內容的preview。直接使用第1個section的內容，至多前Ｎ個字。N=160。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.like_count",
            "description": "<p>讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.reply_count",
            "description": "<p>留言數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.report_count",
            "description": "<p>檢舉數</p>"
          }
        ],
        "interview": [
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "experiences.region",
            "description": "<p>面試地區</p>"
          },
          {
            "group": "interview",
            "type": "Object",
            "optional": true,
            "field": "experiences.salary",
            "description": "<p>面談薪資</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "experiences.salary.type",
            "description": "<p>面談薪資種類 (面談薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "allowedValues": [
              "\"整數, >= 0\""
            ],
            "optional": false,
            "field": "experiences.salary.amount",
            "description": "<p>面談薪資金額 (面談薪資存在的話，一定有此欄位)</p>"
          }
        ],
        "work": [
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "experiences.region",
            "description": "<p>工作地區</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"整數或浮點數, 0 <= N <= 168\""
            ],
            "optional": true,
            "field": "experiences.week_work_time",
            "description": "<p>一週工時</p>"
          },
          {
            "group": "work",
            "type": "Object",
            "optional": true,
            "field": "experiences.salary",
            "description": "<p>工作薪資</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "experiences.salary.type",
            "description": "<p>工作薪資種類 (工作薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "work",
            "type": "Number",
            "optional": false,
            "field": "experiences.salary.amount",
            "description": "<p>工作薪資金額 (工作薪資存在的話，一定有此欄位)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/index.js",
    "groupTitle": "Experiences",
    "name": "GetExperiences"
  },
  {
    "type": "get",
    "url": "/experiences/:id",
    "title": "顯示單篇面試或工作經驗 API",
    "group": "Experiences",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"interview\"",
              "\"work\""
            ],
            "optional": false,
            "field": "type",
            "description": "<p>經驗類別</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at",
            "description": "<p>資料填寫時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "company.name",
            "description": "<p>公司名稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"整數, 0 <= N <= 50\""
            ],
            "optional": true,
            "field": "experience_in_year",
            "description": "<p>相關職務工作經驗</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"大學\"",
              "\"碩士\"",
              "\"博士\"",
              "\"高職\"",
              "\"五專\"",
              "\"二專\"",
              "\"二技\"",
              "\"高中\"",
              "\"國中\"",
              "\"國小\""
            ],
            "optional": true,
            "field": "education",
            "description": "<p>最高學歷</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "region",
            "description": "<p>面試地區/工作地區</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>標題</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "sections",
            "description": "<p>整篇內容</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sections.subtitle",
            "description": "<p>段落標題</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "sections.content",
            "description": "<p>段落內容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "like_count",
            "description": "<p>讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply_count",
            "description": "<p>留言數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "report_count",
            "description": "<p>檢舉數</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "liked",
            "description": "<p>該名使用者是否已經讚過該篇經驗分享 (若使用者未登入，則不會回傳本欄位)</p>"
          }
        ],
        "interview": [
          {
            "group": "interview",
            "type": "Object",
            "optional": false,
            "field": "interview_time",
            "description": "<p>面試時間</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "optional": false,
            "field": "interview_time.year",
            "description": "<p>面試時間的年份</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "allowedValues": [
              "\"1,2,3...12\""
            ],
            "optional": false,
            "field": "interview_time.month",
            "description": "<p>面試時間的月份</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "optional": false,
            "field": "interview_result",
            "description": "<p>面試結果 ( <code>錄取</code> <code>未錄取</code> <code>沒通知</code>或其他 0 &lt; length &lt;= 10 的字串 )</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "optional": false,
            "field": "overall_rating",
            "description": "<p>整體面試滿意度 (整數, 1~5)</p>"
          },
          {
            "group": "interview",
            "type": "Object",
            "optional": true,
            "field": "salary",
            "description": "<p>面談薪資</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "salary.type",
            "description": "<p>面談薪資種類 (面談薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "allowedValues": [
              "\"整數, >= 0\""
            ],
            "optional": false,
            "field": "salary.amount",
            "description": "<p>面談薪資金額 (面談薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "interview",
            "type": "String[]",
            "optional": false,
            "field": "interview_sensitive_questions",
            "description": "<p>面試中提及的特別問題(較敏感/可能違法)陣列。 (可能為空陣列)</p>"
          },
          {
            "group": "interview",
            "type": "Object[]",
            "optional": false,
            "field": "interview_qas",
            "description": "<p>面試題目列表 (可能為空陣列)</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "optional": true,
            "field": "interview_qas.question",
            "description": "<p>面試題目</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "optional": true,
            "field": "interview_qas.answer",
            "description": "<p>面試題目的回答</p>"
          }
        ],
        "work": [
          {
            "group": "work",
            "type": "Object",
            "optional": true,
            "field": "salary",
            "description": "<p>工作薪資</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "salary.type",
            "description": "<p>工作薪資種類 (工作薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "work",
            "type": "Number",
            "optional": false,
            "field": "salary.amount",
            "description": "<p>工作薪資金額 (工作薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "work",
            "type": "Number",
            "optional": true,
            "field": "week_work_time",
            "description": "<p>一週工時</p>"
          },
          {
            "group": "work",
            "type": "Object",
            "optional": false,
            "field": "data_time",
            "description": "<p>離職時間或留資料的時間。若 <code>is_currently_employed</code> = <code>yes</code>則為 <code>created_at</code>  的年月，若為<code>no</code> ，則為 <code>job_ending_time</code></p>"
          },
          {
            "group": "work",
            "type": "Number",
            "optional": false,
            "field": "data_time.year",
            "description": "<p>留資料的時間或離職的年份</p>"
          },
          {
            "group": "work",
            "type": "Number",
            "allowedValues": [
              "\"1,2,3...12\""
            ],
            "optional": false,
            "field": "data_time.month",
            "description": "<p>留資料的時間或離職的月份</p>"
          },
          {
            "group": "work",
            "type": "String",
            "optional": true,
            "field": "recommend_to_others",
            "defaultValue": "yes",
            "description": "<p>,&quot;no&quot;] 是否推薦此工作</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "optional": false,
            "field": "403",
            "description": "<p>該篇文章已被隱藏</p>"
          },
          {
            "group": "Error",
            "optional": false,
            "field": "404",
            "description": "<p>該篇文章不存在</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/index.js",
    "groupTitle": "Experiences",
    "name": "GetExperiencesId"
  },
  {
    "type": "get",
    "url": "/experiences/:id/recommended",
    "title": "\b取得你可能也想看的經驗分享列表 API",
    "group": "Experiences",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < limit <=10 \""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "10",
            "description": "<p>最多回傳limit筆資料</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>總資料數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "experiences",
            "description": "<p>經驗資料</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences._id",
            "description": "<p>經驗分享 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"interview\"",
              "\"work\""
            ],
            "optional": false,
            "field": "experiences.type",
            "description": "<p>經驗類別</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.created_at",
            "description": "<p>資料填寫時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiences.company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "experiences.company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.company.name",
            "description": "<p>公司名稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.title",
            "description": "<p>標題</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "experiences.preview",
            "description": "<p>整篇內容的preview。直接使用第1個section的內容，至多前Ｎ個字。N=160。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.like_count",
            "description": "<p>讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.reply_count",
            "description": "<p>留言數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.report_count",
            "description": "<p>檢舉數</p>"
          }
        ],
        "interview": [
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "experiences.region",
            "description": "<p>面試地區</p>"
          },
          {
            "group": "interview",
            "type": "Object",
            "optional": true,
            "field": "experiences.salary",
            "description": "<p>面談薪資</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "experiences.salary.type",
            "description": "<p>面談薪資種類 (面談薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "allowedValues": [
              "\"整數, >= 0\""
            ],
            "optional": false,
            "field": "experiences.salary.amount",
            "description": "<p>面談薪資金額 (面談薪資存在的話，一定有此欄位)</p>"
          }
        ],
        "work": [
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "experiences.region",
            "description": "<p>工作地區</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"整數或浮點數, 0 <= N <= 168\""
            ],
            "optional": true,
            "field": "experiences.week_work_time",
            "description": "<p>一週工時</p>"
          },
          {
            "group": "work",
            "type": "Object",
            "optional": true,
            "field": "experiences.salary",
            "description": "<p>工作薪資</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "experiences.salary.type",
            "description": "<p>工作薪資種類 (工作薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "work",
            "type": "Number",
            "optional": false,
            "field": "experiences.salary.amount",
            "description": "<p>工作薪資金額 (工作薪資存在的話，一定有此欄位)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/index.js",
    "groupTitle": "Experiences",
    "name": "GetExperiencesIdRecommended"
  },
  {
    "type": "patch",
    "url": "/experiences/:id",
    "title": "更新自已建立的經驗狀態 API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>要更新成的狀態</p>"
          }
        ]
      }
    },
    "group": "Experiences",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否成功點讚</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>更新後狀態</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/index.js",
    "groupTitle": "Experiences",
    "name": "PatchExperiencesId"
  },
  {
    "type": "delete",
    "url": "/experiences/:id/likes",
    "title": "移除單篇經驗的讚 API",
    "group": "Experiences_Likes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否成功取消讚</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/likes.js",
    "groupTitle": "Experiences_Likes",
    "name": "DeleteExperiencesIdLikes"
  },
  {
    "type": "post",
    "url": "/experiences/:id/likes",
    "title": "新增單篇經驗的讚 API",
    "group": "Experiences_Likes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否成功點讚</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/likes.js",
    "groupTitle": "Experiences_Likes",
    "name": "PostExperiencesIdLikes"
  },
  {
    "type": "get",
    "url": "/experiences/:id/replies",
    "title": "取得單篇經驗的留言列表 API",
    "group": "Experiences_Replies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數\""
            ],
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>(從第 start 個留言開始 (start =0為第1筆留言）)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數, 0 < N <= 1000\""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>回傳最多limit個留言</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "replies",
            "description": "<p>該留言的物件陣列 (由第1樓排到第N樓。第1樓為該篇經驗分享的時間最早的第一個留言，依此類推</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies._id",
            "description": "<p>留言的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies.content",
            "description": "<p>留言的內容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "replies.like_count",
            "description": "<p>留言的讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "replies.report_count",
            "description": "<p>留言的檢舉數</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": true,
            "field": "replies.liked",
            "description": "<p>該留言是否已經被該名使用按讚過(使用者登入時才會回傳此欄位)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies.created_at",
            "description": "<p>該留言的時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "replies.floor",
            "description": "<p>樓層</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/replies.js",
    "groupTitle": "Experiences_Replies",
    "name": "GetExperiencesIdReplies"
  },
  {
    "type": "get",
    "url": "/experiences/:id/reports",
    "title": "取得單篇經驗的檢舉列表 API",
    "group": "Experiences_Replies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數\""
            ],
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>(從第 start 個檢舉開始 (start =0為第1筆檢舉）)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數, 0 < N <= 1000\""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>回傳最多limit個檢舉</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reports",
            "description": "<p>該檢舉的物件陣列</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports._id",
            "description": "<p>該檢舉的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"這是廣告或垃圾訊息\"",
              "\"我認為這篇文章涉及人身攻擊、誹謗\"",
              "\"我認為這篇文章內容不實\"",
              "\"其他\""
            ],
            "optional": false,
            "field": "reports.reason_category",
            "description": "<p>檢舉的原因分類</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.reason",
            "description": "<p>檢舉的原因詳述。 若 reason_category = <code>這是廣告或垃圾訊息</code> 則不會有本欄位。但若為其他分類，則會有此欄位。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.created_at",
            "description": "<p>該檢舉的時間</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/reports.js",
    "groupTitle": "Experiences_Replies",
    "name": "GetExperiencesIdReports"
  },
  {
    "type": "get",
    "url": "/replies/:id/reports",
    "title": "取得單篇留言的檢舉列表 API",
    "group": "Experiences_Replies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數\""
            ],
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>(從第 start 個檢舉開始 (start =0為第1筆檢舉）)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數, 0 < N <= 1000\""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>回傳最多limit個檢舉</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "reports",
            "description": "<p>該檢舉的物件陣列</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports._id",
            "description": "<p>該檢舉的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"這是廣告或垃圾訊息\"",
              "\"我認為這篇文章涉及人身攻擊、誹謗\"",
              "\"我認為這篇文章內容不實\"",
              "\"其他\""
            ],
            "optional": false,
            "field": "reports.reason_category",
            "description": "<p>檢舉的原因分類</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.reason",
            "description": "<p>檢舉的原因詳述。 若 reason_category = <code>這是廣告或垃圾訊息</code> 則不會有本欄位。但若為其他分類，則會有此欄位。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reports.created_at",
            "description": "<p>該檢舉的時間</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/replies/reports.js",
    "groupTitle": "Experiences_Replies",
    "name": "GetRepliesIdReports"
  },
  {
    "type": "post",
    "url": "/experiences/:id/replies",
    "title": "新增單篇經驗的留言 API",
    "group": "Experiences_Replies",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 1000 \""
            ],
            "optional": false,
            "field": "content",
            "description": "<p>留言內容</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "reply",
            "description": "<p>該留言的物件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reply._id",
            "description": "<p>留言的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reply.content",
            "description": "<p>留言的內容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply.like_count",
            "description": "<p>留言的讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "reply.floor",
            "description": "<p>該留言的樓層數 (整數, index from 0)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "reply.created_at",
            "description": "<p>該留言的時間</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/replies.js",
    "groupTitle": "Experiences_Replies",
    "name": "PostExperiencesIdReplies"
  },
  {
    "type": "post",
    "url": "/experiences/:id/reports",
    "title": "新增單篇經驗分享的檢舉 API",
    "group": "Experiences_Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"這是廣告或垃圾訊息\"",
              "\"我認為這篇文章涉及人身攻擊、誹謗\"",
              "\"我認為這篇文章內容不實\"",
              "\"其他\""
            ],
            "optional": false,
            "field": "reason_category",
            "description": "<p>檢舉的原因分類</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 500\""
            ],
            "optional": false,
            "field": "reason",
            "description": "<p>檢舉的原因詳述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "report",
            "description": "<p>該檢舉的物件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report._id",
            "description": "<p>該檢舉的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"這是廣告或垃圾訊息\"",
              "\"我認為這篇文章涉及人身攻擊、誹謗\"",
              "\"我認為這篇文章內容不實\"",
              "\"其他\""
            ],
            "optional": false,
            "field": "report.reason_category",
            "description": "<p>檢舉的原因分類</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report.reason",
            "description": "<p>檢舉的原因詳述。 若 reason_category = <code>這是廣告或垃圾訊息</code> 則不會有本欄位。但若為其他分類，則會有此欄位。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report.created_at",
            "description": "<p>該檢舉的時間</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/experiences/reports.js",
    "groupTitle": "Experiences_Reports",
    "name": "PostExperiencesIdReports"
  },
  {
    "type": "post",
    "url": "/replies/:id/reports",
    "title": "新增單篇留言的檢舉 API",
    "group": "Experiences_Reports",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"這是廣告或垃圾訊息\"",
              "\"我認為這篇文章涉及人身攻擊、誹謗\"",
              "\"我認為這篇文章內容不實\"",
              "\"其他\""
            ],
            "optional": false,
            "field": "reason_category",
            "description": "<p>檢舉的原因分類</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 500\""
            ],
            "optional": false,
            "field": "reason",
            "description": "<p>檢舉的原因詳述</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "report",
            "description": "<p>該檢舉的物件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report._id",
            "description": "<p>該檢舉的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"這是廣告或垃圾訊息\"",
              "\"我認為這篇文章涉及人身攻擊、誹謗\"",
              "\"我認為這篇文章內容不實\"",
              "\"其他\""
            ],
            "optional": false,
            "field": "report.reason_category",
            "description": "<p>檢舉的原因分類</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report.reason",
            "description": "<p>檢舉的原因詳述。 當 reason_category = <code>這是廣告或垃圾訊息</code>，且 request 中未給 reason，則不會回傳此欄位（直接缺這個欄位，而非等於 undefined）。</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "report.created_at",
            "description": "<p>該檢舉的時間</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/replies/reports.js",
    "groupTitle": "Experiences_Reports",
    "name": "PostRepliesIdReports"
  },
  {
    "type": "post",
    "url": "/interview_experiences",
    "title": "上傳面試經驗 API",
    "group": "Interview_Experiences",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_query",
            "description": "<p>公司名稱 或 統一編號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "company_id",
            "description": "<p>公司統編 (如果自動完成有成功，會拿的到 company_id )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "region",
            "description": "<p>面試地區</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>應徵職稱</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, 0 <= N <= 50\""
            ],
            "optional": true,
            "field": "experience_in_year",
            "description": "<p>相關職務工作經驗</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"大學\"",
              "\"碩士\"",
              "\"博士\"",
              "\"高職\"",
              "\"五專\"",
              "\"二專\"",
              "\"二技\"",
              "\"高中\"",
              "\"國中\"",
              "\"國小\""
            ],
            "optional": true,
            "field": "education",
            "description": "<p>最高學歷</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "interview_time",
            "description": "<p>面試時間</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, N >= current_year - 10\""
            ],
            "optional": false,
            "field": "interview_time.year",
            "description": "<p>面試時間的年份</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"1,2,3...12\""
            ],
            "optional": false,
            "field": "interview_time.month",
            "description": "<p>面試時間的月份</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"錄取,未錄取,沒通知,或其他 0 < length <= 10 的字串\""
            ],
            "optional": false,
            "field": "interview_result",
            "description": "<p>面試結果</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "salary",
            "description": "<p>面談薪資</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "salary.type",
            "description": "<p>面談薪資種類 (若有上傳面談薪資欄位，本欄必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, >= 0\""
            ],
            "optional": false,
            "field": "salary.amount",
            "description": "<p>面談薪資金額 (若有上傳面談薪資欄位，本欄必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, 1~5\""
            ],
            "optional": false,
            "field": "overall_rating",
            "description": "<p>整體面試滿意度</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 25 \""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>整篇經驗分享的標題</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "sections",
            "description": "<p>整篇內容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 25\""
            ],
            "optional": false,
            "field": "sections.subtitle",
            "description": "<p>段落標題</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 5000\""
            ],
            "optional": false,
            "field": "sections.content",
            "description": "<p>段落內容</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "allowedValues": [
              "\"Array maximum size: 30\""
            ],
            "optional": true,
            "field": "interview_qas",
            "description": "<p>面試題目列表</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 250\""
            ],
            "optional": false,
            "field": "interview_qas.question",
            "description": "<p>面試題目 (interview_qas有的話，必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 5000\""
            ],
            "optional": true,
            "field": "interview_qas.answer",
            "description": "<p>面試題目的回答 (interview_qas有的話，選填)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "allowedValues": [
              "\"曾詢問家庭狀況\"",
              "\"曾詢問婚姻狀況\"",
              "\"生育計畫\"",
              "\"曾要求繳交身分證\"",
              "\"曾要求繳交保證金\"",
              "\"曾詢問宗教信仰\"",
              "\"或其他",
              "0",
              "<",
              "length",
              "<=",
              "20",
              "的字串\""
            ],
            "optional": true,
            "field": "interview_sensitive_questions",
            "description": "<p>面試中提及的特別問題陣列(較敏感/可能違法)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "published",
            "description": "<p>該篇文章的狀態</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否上傳成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experience",
            "description": "<p>經驗分享物件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience._id",
            "description": "<p>經驗分享id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/interview_experiences/index.js",
    "groupTitle": "Interview_Experiences",
    "name": "PostInterview_experiences"
  },
  {
    "type": "get",
    "url": "/jobs/search",
    "title": "從職稱清單中搜尋職稱",
    "description": "<p>從職稱清單中根據關鍵字搜尋職稱，每頁顯示 25 筆資料，如果關鍵字為空，則匹配所有職稱</p>",
    "group": "Jobs",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "key",
            "description": "<p>關鍵字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>頁碼</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>代號</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": ".des",
            "description": "<p>職稱名</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/jobs.js",
    "groupTitle": "Jobs",
    "name": "GetJobsSearch"
  },
  {
    "type": "get",
    "url": "/me/experiences",
    "title": "取得自已的經驗分享列表 API",
    "group": "Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"0 <= start \""
            ],
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>從第 start + 1 筆資料開始</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < limit <=100 \""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>最多回傳limit筆資料</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"interview\"",
              "\"work\"",
              "\"interview,work\""
            ],
            "optional": true,
            "field": "type",
            "defaultValue": "“interview,work”",
            "description": "<p>搜尋的種類</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>總資料數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "experiences",
            "description": "<p>經驗資料</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences._id",
            "description": "<p>經驗分享 id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"interview\"",
              "\"work\""
            ],
            "optional": false,
            "field": "experiences.type",
            "description": "<p>經驗類別</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.created_at",
            "description": "<p>資料填寫時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experiences.company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "experiences.company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.company.name",
            "description": "<p>公司名稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experiences.title",
            "description": "<p>標題</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "experiences.preview",
            "description": "<p>整篇內容的preview。直接使用第1個section的內容，至多前Ｎ個字。N=160。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.like_count",
            "description": "<p>讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.reply_count",
            "description": "<p>留言數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "experiences.report_count",
            "description": "<p>檢舉數</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": false,
            "field": "experience.status",
            "description": "<p>狀態</p>"
          }
        ],
        "interview": [
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "experiences.region",
            "description": "<p>面試地區</p>"
          },
          {
            "group": "interview",
            "type": "Object",
            "optional": true,
            "field": "experiences.salary",
            "description": "<p>面談薪資</p>"
          },
          {
            "group": "interview",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "experiences.salary.type",
            "description": "<p>面談薪資種類 (面談薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "interview",
            "type": "Number",
            "allowedValues": [
              "\"整數, >= 0\""
            ],
            "optional": false,
            "field": "experiences.salary.amount",
            "description": "<p>面談薪資金額 (面談薪資存在的話，一定有此欄位)</p>"
          }
        ],
        "work": [
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "experiences.region",
            "description": "<p>工作地區</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"整數或浮點數, 0 <= N <= 168\""
            ],
            "optional": true,
            "field": "experiences.week_work_time",
            "description": "<p>一週工時</p>"
          },
          {
            "group": "work",
            "type": "Object",
            "optional": true,
            "field": "experiences.salary",
            "description": "<p>工作薪資</p>"
          },
          {
            "group": "work",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "experiences.salary.type",
            "description": "<p>工作薪資種類 (工作薪資存在的話，一定有此欄位)</p>"
          },
          {
            "group": "work",
            "type": "Number",
            "optional": false,
            "field": "experiences.salary.amount",
            "description": "<p>工作薪資金額 (工作薪資存在的話，一定有此欄位)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/me/experiences/index.js",
    "groupTitle": "Me",
    "name": "GetMeExperiences"
  },
  {
    "type": "get",
    "url": "/me/replies",
    "title": "取得自已的留言列表",
    "group": "Me",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數\""
            ],
            "optional": true,
            "field": "start",
            "defaultValue": "0",
            "description": "<p>(從第 start 個留言開始 (start = 0 為第 1 筆留言）)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"整數, 0 < N <= 100\""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "20",
            "description": "<p>回傳最多 limit 個留言</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "replies",
            "description": "<p>該留言的物件陣列 (按照 created_at 排序，最新的在最前</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies._id",
            "description": "<p>留言的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies.content",
            "description": "<p>留言的內容</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "replies.like_count",
            "description": "<p>留言的讚數</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "replies.report_count",
            "description": "<p>留言的檢舉數</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies.created_at",
            "description": "<p>該留言的時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "replies.floor",
            "description": "<p>樓層</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "replies.experience",
            "description": "<p>該留言對應的經驗</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies.experience._id",
            "description": "<p>經驗的ID</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "replies.experience.title",
            "description": "<p>經驗的標題</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": false,
            "field": "replies.status",
            "description": "<p>狀態</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/me/replies/index.js",
    "groupTitle": "Me",
    "name": "GetMeReplies"
  },
  {
    "type": "get",
    "url": "/me/workings",
    "title": "取得自已的薪資與工時分享列表 API",
    "group": "Me",
    "permission": [
      {
        "name": "使用者需登入"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>總資料數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "time_and_salary",
            "description": "<p>薪時資料</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_and_salary._id",
            "description": "<p>薪時資料 id</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "time_and_salary.company",
            "description": "<p>公司</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "time_and_salary.company.id",
            "description": "<p>公司統編</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_and_salary.company.name",
            "description": "<p>公司名稱</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_and_salary.sector",
            "description": "<p>部門/分公司/廠區</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_and_salary.created_at",
            "description": "<p>資料填寫時間</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "time_and_salary.data_time",
            "description": "<p>資料參考時間。當填答者已離職，則用離職年月，當填答者未離職，用填寫時間年月。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time_and_salary.data_time.year",
            "description": "<p>資料參考時間的年份。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time_and_salary.data_time.month",
            "description": "<p>資料參考時間的月份。 1代表1月。</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time_and_salary.estimated_hourly_wage",
            "description": "<p>估計時薪 (可能不存在)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "time_and_salary.job_title",
            "description": "<p>職稱</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "allowedValues": [
              "0(幾乎不)",
              "1(偶爾)",
              "2(經常)",
              "3(幾乎天天)"
            ],
            "optional": false,
            "field": "time_and_salary.overtime_frequency",
            "description": "<p>加班頻率</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "time_and_salary.salary",
            "description": "<p>薪資資訊</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time_and_salary.salary.amount",
            "description": "<p>薪資多寡</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"hour\"",
              "\"day\"",
              "\"month\"",
              "\"year\""
            ],
            "optional": false,
            "field": "time_and_salary.salary.type",
            "description": "<p>薪資種類</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "time_and_salary.week_work_time",
            "description": "<p>每周工時</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": false,
            "field": "time_and_salary.status",
            "description": "<p>狀態</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/me/workings/index.js",
    "groupTitle": "Me",
    "name": "GetMeWorkings"
  },
  {
    "type": "get",
    "url": "/company_keywords",
    "title": "取得以公司搜尋的熱門關鍵字 API",
    "group": "Popular_Keywords",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "5"
            ],
            "optional": false,
            "field": "num",
            "description": "<p>回傳的關鍵字數</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "keywords",
            "description": "<p>以公司查詢的熱門關鍵字列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/company_keywords/index.js",
    "groupTitle": "Popular_Keywords",
    "name": "GetCompany_keywords"
  },
  {
    "type": "get",
    "url": "/job_title_keywords",
    "title": "取得以職稱搜尋的熱門關鍵字 API",
    "group": "Popular_Keywords",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "5"
            ],
            "optional": false,
            "field": "num",
            "description": "<p>回傳的關鍵字數</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "keywords",
            "description": "<p>以職稱查詢的熱門關鍵字列表</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/job_title_keywords/index.js",
    "groupTitle": "Popular_Keywords",
    "name": "GetJob_title_keywords"
  },
  {
    "type": "patch",
    "url": "/replies/:id",
    "title": "更新留言狀態",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>要更新成的狀態</p>"
          }
        ]
      }
    },
    "group": "Replies",
    "permission": [
      {
        "name": "author"
      }
    ],
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否成功點讚</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>更新後狀態</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "403",
            "description": "<p>如果 user 嘗試修改它人的留言</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/replies/index.js",
    "groupTitle": "Replies",
    "name": "PatchRepliesId"
  },
  {
    "type": "delete",
    "url": "/replies/:id/likes",
    "title": "移除留言的讚 API",
    "group": "Replies_Likes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否成功取消讚</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/replies/likes.js",
    "groupTitle": "Replies_Likes",
    "name": "DeleteRepliesIdLikes"
  },
  {
    "type": "post",
    "url": "/replies/:id/likes",
    "title": "新增留言的讚 API",
    "group": "Replies_Likes",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否成功點讚</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/replies/likes.js",
    "groupTitle": "Replies_Likes",
    "name": "PostRepliesIdLikes"
  },
  {
    "type": "post",
    "url": "/work_experiences",
    "title": "上傳工作經驗 API",
    "group": "Work_Experiences",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "company_query",
            "description": "<p>公司名稱 或 統一編號</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "company_id",
            "description": "<p>公司統編 (如果自動完成有成功，會拿的到 company_id )</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"彰化縣\"",
              "\"嘉義市\"",
              "\"嘉義縣\"",
              "\"新竹市\"",
              "\"新竹縣\"",
              "\"花蓮縣\"",
              "\"高雄市\"",
              "\"基隆市\"",
              "\"金門縣\"",
              "\"連江縣\"",
              "\"苗栗縣\"",
              "\"南投縣\"",
              "\"新北市\"",
              "\"澎湖縣\"",
              "\"屏東縣\"",
              "\"臺中市\"",
              "\"臺南市\"",
              "\"臺北市\"",
              "\"臺東縣\"",
              "\"桃園市\"",
              "\"宜蘭縣\"",
              "\"雲林縣\""
            ],
            "optional": false,
            "field": "region",
            "description": "<p>面試地區</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "job_title",
            "description": "<p>工作職稱</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, 0 <= N <= 50\""
            ],
            "optional": true,
            "field": "experience_in_year",
            "description": "<p>相關職務工作經驗</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"大學\"",
              "\"碩士\"",
              "\"博士\"",
              "\"高職\"",
              "\"五專\"",
              "\"二專\"",
              "\"二技\"",
              "\"高中\"",
              "\"國中\"",
              "\"國小\""
            ],
            "optional": true,
            "field": "education",
            "description": "<p>最高學歷</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"yes\"",
              "\"no\""
            ],
            "optional": false,
            "field": "is_currently_employed",
            "description": "<p>現在是否在職</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "job_ending_time",
            "description": "<p>工作結束時間(當 is_currently_employed 為no時，本欄才會出現且必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, Ｎ >= current_year - 10\""
            ],
            "optional": false,
            "field": "job_ending_time.year",
            "description": "<p>工作結束時間的年份</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, 1~12\""
            ],
            "optional": false,
            "field": "job_ending_time.month",
            "description": "<p>工作結束時間的月份</p>"
          },
          {
            "group": "Parameter",
            "type": "Object",
            "optional": true,
            "field": "salary",
            "description": "<p>薪資</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"year\"",
              "\"month\"",
              "\"day\"",
              "\"hour\""
            ],
            "optional": false,
            "field": "salary.type",
            "description": "<p>薪資種類 (若有上傳薪資欄位，本欄必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數, >= 0\""
            ],
            "optional": false,
            "field": "salary.amount",
            "description": "<p>薪資金額 (若有上傳薪資欄位，本欄必填)</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "allowedValues": [
              "\"整數或浮點數。 168>=N>=0。\""
            ],
            "optional": true,
            "field": "week_work_time",
            "description": "<p>一週工時</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"yes\"",
              "\"no\""
            ],
            "optional": true,
            "field": "recommend_to_others",
            "description": "<p>是否推薦此工作</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 25 \""
            ],
            "optional": false,
            "field": "title",
            "description": "<p>整篇經驗分享的標題</p>"
          },
          {
            "group": "Parameter",
            "type": "Object[]",
            "optional": false,
            "field": "sections",
            "description": "<p>整篇內容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 25\""
            ],
            "optional": false,
            "field": "sections.subtitle",
            "description": "<p>段落標題</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < length <= 5000\""
            ],
            "optional": false,
            "field": "sections.content",
            "description": "<p>段落內容</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": true,
            "field": "status",
            "defaultValue": "published",
            "description": "<p>該篇文章的狀態</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否上傳成功</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "experience",
            "description": "<p>經驗分享物件</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "experience._id",
            "description": "<p>經驗分享id</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/work_experiences/index.js",
    "groupTitle": "Work_Experiences",
    "name": "PostWork_experiences"
  },
  {
    "type": "get",
    "url": "/campaigns/:campaign_name",
    "title": "查詢 campaign_name 薪資與工時資料 API",
    "group": "Workings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"created_at\"",
              "\"week_work_time\"",
              "\"estimated_hourly_wage\""
            ],
            "optional": true,
            "field": "sorted_by",
            "defaultValue": "created_at",
            "description": "<p>單筆資料排序的方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descending\"",
              "\"ascending\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "descending",
            "description": "<p>資料排序由大到小或由小到大。無資料者會被排到最下方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\""
            ],
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>分頁號碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < limit <= 50\""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "25",
            "description": "<p>單頁資料筆數</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "job_titles",
            "description": "<p>要搜尋的職稱</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>總資料數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "time_and_salary",
            "description": "<p>薪時資料</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/workings/index.js",
    "groupTitle": "Workings",
    "name": "GetCampaignsCampaign_name"
  },
  {
    "type": "get",
    "url": "/workings",
    "title": "查詢薪資與工時資料 API",
    "group": "Workings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"created_at\"",
              "\"week_work_time\"",
              "\"estimated_hourly_wage\""
            ],
            "optional": true,
            "field": "sorted_by",
            "defaultValue": "created_at",
            "description": "<p>單筆資料排序的方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descending\"",
              "\"ascending\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "descending",
            "description": "<p>資料排序由大到小或由小到大。無資料者會被排到最下方</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0\""
            ],
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>分頁號碼</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"0 < limit <= 50\""
            ],
            "optional": true,
            "field": "limit",
            "defaultValue": "25",
            "description": "<p>單頁資料筆數</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "total",
            "description": "<p>總資料數</p>"
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "time_and_salary",
            "description": "<p>薪時資料</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/workings/index.js",
    "groupTitle": "Workings",
    "name": "GetWorkings"
  },
  {
    "type": "get",
    "url": "/workings/companies/search",
    "title": "搜尋工時資訊中的公司",
    "group": "Workings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>搜尋關鍵字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>顯示第幾頁</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "._id",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id.id",
            "description": "<p>公司統編 (有可能沒有)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id.name",
            "description": "<p>公司名稱 (有可能是 Array)</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/workings/index.js",
    "groupTitle": "Workings",
    "name": "GetWorkingsCompaniesSearch"
  },
  {
    "type": "get",
    "url": "/workings/extreme",
    "title": "查詢薪資工時統計上 1% 外的值",
    "group": "Workings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"created_at\"",
              "\"week_work_time\"",
              "\"estimated_hourly_wage\""
            ],
            "optional": true,
            "field": "sorted_by",
            "defaultValue": "created_at",
            "description": "<p>單筆資料排序的方式</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"descending\"",
              "\"ascending\""
            ],
            "optional": true,
            "field": "order",
            "defaultValue": "descending",
            "description": "<p>資料排序由大到小或由小到大。無資料者會被排到最下方</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "time_and_salary",
            "description": "<p>薪時資料</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/workings/index.js",
    "groupTitle": "Workings",
    "name": "GetWorkingsExtreme"
  },
  {
    "type": "get",
    "url": "/workings/jobs/search",
    "title": "搜尋工時資訊中的職稱",
    "group": "Workings",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "key",
            "description": "<p>搜尋關鍵字</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": true,
            "field": "page",
            "defaultValue": "0",
            "description": "<p>顯示第幾頁</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": ".",
            "description": ""
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "._id",
            "description": "<p>職稱</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/workings/index.js",
    "groupTitle": "Workings",
    "name": "GetWorkingsJobsSearch"
  },
  {
    "type": "patch",
    "url": "/workings/:id",
    "title": "更新自已建立的工時與薪資狀態 API",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "allowedValues": [
              "\"published\"",
              "\"hidden\""
            ],
            "optional": false,
            "field": "status",
            "description": "<p>要更新成的狀態</p>"
          }
        ]
      }
    },
    "group": "Workings",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>是否更新狀態成功</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": "<p>更新後狀態</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/workings/index.js",
    "groupTitle": "Workings",
    "name": "PatchWorkingsId"
  }
] });
