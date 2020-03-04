<template>
  <div id="app">
    <div>
      <ul class="account-list">
        <li>
          <a href="https://github.com/login/oauth/authorize?client_id=74b91b6c4dba61efe1f9&state=github"
             style="{right: 26px;}">
            <!-- <Icon  style="color: rebeccapurple;" size="40" type="social-github"></Icon> -->
            <img class="icon" src="../../images/GitHub.svg"/>
          </a>
        </li>

        <li>
          <a
            href="https://graph.qq.com/oauth2.0/authorize?response_type=code&client_id=101512648&redirect_uri=http://www.lovemtt.com/qq&state=qq"
            style="{right: 26px;}">
            <img class="icon" src="../../images/social-qq.svg"/>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>

</script>
<style>
  #bar {
    margin-top: -50px;
    margin-bottom: 0px;
  }

  #space {
    margin: 0 21% 0 20%;
  }
</style>
