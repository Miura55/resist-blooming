<template>
  <div>
    <h1>ようこそ {{userName}} さん</h1>
    <br />
    <button class="btn btn-danger mb-1" id="logout" @click="logout">ログアウト</button>
    <form name="form" id="form">
      <div class="form-group">
        <label for="name" class="col-4 control-label">氏名</label>
        <div class="row justify-content-center">
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              id="familyName"
              v-model="reqParam.familyName"
              placeholder="姓"
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              id="firstName"
              v-model="reqParam.firstName"
              placeholder="名"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="yomi" class="col-4 control-label">ふりがな</label>
        <div class="row justify-content-center">
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              id="familyNameCap"
              v-model="reqParam.familyNameCap"
              placeholder="せい"
            />
          </div>
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              id="firstNameCap"
              v-model="reqParam.firstNameCap"
              placeholder="めい"
            />
          </div>
        </div>
      </div>
      <div class="form-group">
        <label for="birthday" class="control-label">生年月日</label>
        <div class="row justify-content-center">
          <div class="col-4">
            <input
              type="tel"
              name="year"
              id="bYear"
              v-model="reqParam.bYear"
              class="form-control"
              maxlength="4"
              placeholder="年"
            />
          </div>
          <div class="col-3">
            <input
              type="tel"
              name="month"
              id="bMonth"
              v-model="reqParam.bMonth"
              class="form-control"
              maxlength="2"
              placeholder="月"
            />
          </div>
          <div class="col-3">
            <input
              type="tel"
              name="day"
              id="bDay"
              v-model="reqParam.bDay"
              class="form-control"
              maxlength="2"
              placeholder="日"
            />
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="bloodType" class="col-4 control-label">血液型</label>
        <select
          name="bloodType"
          id="bloodType"
          v-model="reqParam.bloodType"
          class="form-control col-4"
        >
          <option value>選択してください</option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="O">O</option>
          <option value="AB">AB</option>
        </select>
      </div>
      <div class="form-group row">
        <label for="job" class="col-4 control-label">職業</label>
        <select name="job" id="job" v-model="reqParam.job" class="form-control col-4">
          <option value>選択してください</option>
          <option value="公務員">公務員</option>
          <option value="経営者・役員">経営者・役員</option>
          <option value="会社員">会社員</option>
          <option value="自営業">自営業</option>
          <option value="自由業">自由業</option>
          <option value="専業主婦">専業主婦</option>
          <option value="パート・アルバイト">パート・アルバイト</option>
          <option value="学生">学生</option>
          <option value="その他">その他</option>
        </select>
      </div>
      <div class="form-group row">
        <label for="zipcode" class="col-4 control-label">郵便番号(数字のみ)</label>
        <input
          type="tel"
          name="zipcode"
          id="zipcode"
          v-model="reqParam.zipcode"
          class="form-control col-4"
        />
      </div>
      <div class="form-group">
        <label for="region" class="col-4 control-label">住所</label>
        <div class="row justify-content-center">
          <div class="col-4">
            <input
              type="text"
              class="form-control"
              name="region"
              id="region"
              v-model="reqParam.region"
              placeholder="都道府県"
            />
          </div>
          <div class="col-7">
            <input
              type="text"
              class="form-control"
              name="city"
              id="city"
              v-model="reqParam.city"
              placeholder="市区町村以下"
            />
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="phoneNumber" class="col-4 control-label">電話番号(携帯)</label>
        <input
          type="tel"
          name="phoneNumber"
          id="phoneNumber"
          v-model="reqParam.phoneNumber"
          class="form-control col-4"
        />
      </div>
      <div class="form-group row">
        <label for="phoneNumber" class="col-4 control-label">メールアドレス</label>
        <input
          type="text"
          name="eMail"
          id="eMail"
          v-model="reqParam.eMail"
          class="form-control col-4"
        />
      </div>
      <div class="form-group row">
        <label for="startDate" class="col-4 control-label">活動開始希望日</label>
        <input
          type="date"
          name="startDate"
          id="startDate"
          v-model="reqParam.startDate"
          class="form-control col-5"
        />
      </div>
      <div class="form-group row">
        <label for="endDate" class="col-4 control-label">活動終了希望日</label>
        <input
          type="date"
          name="endDate"
          id="endDate"
          v-model="reqParam.endDate"
          class="form-control col-5"
        />
      </div>
    </form>
    <button class="btn btn-primary col-4" @click="send">登録</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      inClient: false,
      userName: "",
      reqParam: {
        familyName: "",
        firstName: "",
        firstNameCap: "",
        familyNameCap: "",
        bYear: "",
        bMonth: "",
        bDay: "",
        bloodType: "",
        job: "",
        zipcode: "",
        region: "",
        city: "",
        phoneNumber: "",
        eMail: "",
        startDate: "",
        endDate: "",
        userId: ""
      }
    };
  },
  created() {
    this.initializeLiff();
  },
  methods: {
    initializeLiff: function() {
      liff.init(
        {
          // test
          // liffId: process.env.VUE_APP_LIFF_ID
          // deploy
          liffId: "1653851902-lV2nJOb2"
        },
        data => {
          this.loginCheck();
        },
        err => {
          console.log("LIFF initialization failed", err);
        }
      );
    },
    loginCheck: function() {
      // ログインチェック
      if (liff.isInClient()) {
        document.getElementById("logout").style.display = "none";
        // プロフィール取得
        liff
          .getProfile()
          .then(profile => {
            this.userName = profile.displayName;
            this.reqParam.userId = profile.userId;
            console.log(this.userName);
          })
          .catch(err => {
            console.log("error", err);
          });
      } else if (liff.isLoggedIn()) {
        // プロフィール取得
        liff
          .getProfile()
          .then(profile => {
            this.userName = profile.displayName;
            this.reqParam.userId = profile.userId;
            console.log(this.userName);
            this.$swal("ログインしました");
          })
          .catch(err => {
            console.log("error", err);
          });
      } else {
        // ログインまだ
        this.$router.push({ name: "Login" });
      }
    },
    logout: function() {
      // ログアウト
      if (liff.isLoggedIn()) {
        liff.logout();
        this.$router.push({ name: "Login" });
        location.reload();
      }
    },
    send: function() {
      var me = this;
      console.log(this.reqParam);
      if (
        !this.reqParam.familyName ||
        !this.reqParam.firstName ||
        !this.reqParam.bYear ||
        !this.reqParam.bDay ||
        !this.reqParam.bMonth ||
        !this.reqParam.bloodType ||
        !this.reqParam.job ||
        !this.reqParam.zipcode ||
        !this.reqParam.phoneNumber ||
        !this.reqParam.startDate ||
        !this.reqParam.endDate
      ) {
        this.$swal("入力不備があります");
        return true;
      }

      this.axios
        .post(
          "https://8457ede6.us-south.apigw.appdomain.cloud/blooming/resist",
          this.reqParam
        )
        .then(function(response) {
          console.log(response);
          if (liff.isInClient()) {
            liff.closeWindow();
          }
          me.$swal("送信しました");
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
