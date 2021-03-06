<template>
  <div class="login-contain">
    <el-form ref="loginForm" class="login-form" label-position="left">
      <div class="title-contain">
        <h3 class="title">登录云雀</h3>
      </div>

      <el-form-item>
        <span class="icon-login">
          <i class="el-icon-user-solid"/>
        </span>
        <el-input
          ref="username"
          v-model="loginInfo.username"
          placeholder="用户名"
          name="username"
          type="text"
          tabindex="1"
          auto-complete="on"
        />
      </el-form-item>

      <el-form-item>
        <span class="icon-login">
          <i class="el-icon-s-order"/>
        </span>
        <el-input
          :key="passwordType"
          ref="password"
          v-model="loginInfo.password"
          :show-password="passwordType"
          placeholder="密码"
          name="password"
          type="text"
          tabindex="2"
          auto-complete="on"
          @keyup.enter.native="handleLogin"
        />
      </el-form-item>

      <el-button :loading="loading" type="primary" style="width:100%;margin-bottom:30px;" @click.native.prevent="handleLogin">登录</el-button>

      <div class="tips">
        <span>提示：</span>
      </div>
    </el-form>
  </div>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      loginInfo: {
        username: 'zhangsan',
        password: '111111'
      },
      loading: false,
      passwordType: 'password'
    }
  },
  methods: {
    handleLogin() {
      this.$refs.loginForm.validate(valid => {
        if(valid) {
          this.loading = true
          // 调用 dispatch 修改 loginForm，并进入首页
          // this.$store.dispatch('user/login', this.loginForm).then(() => {
          //   this.$router.push({ path: this.redirect || '/' })
          //   this.loading = false
          // }).catch(() => {
          //   this.loading = false
          // })
        } else {
          console.log('error submit') // 可以修改为模态框提醒
          return false
        }
      })
    },
    showPwd() {
      if(this.passwordType === 'password') {
        this.passwordType = ''
      } else {
        this.passwordType = 'password'
      }
      this.$nextTick(() => {
        this.$refs.password.focus()
      })
    }
  }
}
</script>

<style lang="scss" scoped>
$bg:#2d3a4b;
$dark_gray:#889aa4;
$light_gray:#eee;

.login-contain {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 480px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
  }

  .tips {
    font-size: 14px;
    color: #fff;
    margin-bottom: 10px;
  }

  .icon-login {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    width: 30px;
    display: inline-block;
  }

  .title-contain {

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0 auto 40px auto;
      text-align: center;
      font-weight: bold;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>

<style lang="scss">
$bg:#283443;
$light_gray:#fff;
$cursor: #fff;

@supports (-webkit-mask: none) and (not (cater-color: $cursor)) {
  .login-container .el-input input {
    color: $cursor;
  }
}

.login-contain {
  .el-input {
    display: inline-block;
    height: 47px;
    width: 85%;
  }

  input {
    background: transparent;
    border: 0px;
    -webkit-appearance: none;
    border-radius: 0px;
    padding: 12px 5px 12px 15px;
    color: $light_gray;
    height: 47px;
    caret-color: $cursor;

    &:-webkit-autofill {
      box-shadow: 0 0 0px 1000px $bg inset !important;
      -webkit-text-fill-color: $cursor !important;
    }
  }

  .el-form-item {
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    color: #454545;
  }
}
</style>
