<style>
  /* Style for the Submit button */
  .submit-button {
    background-color: #7b97aa;
    color: white;
    padding: 10px 20px;
    font-size: 16px;
    border-radius: 5px;
    border: none;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
  }

  /* Hover effect */
  .submit-button:hover {
    background-color: #5c7f93; /* Darker color on hover */
    transform: scale(1.05); /* Scale up the button slightly */
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3); /* Add shadow on hover */
  }

</style>

<div style="text-align: center;">
  <p>

<script src='https://www.google.com/recaptcha/api.js'></script>
<form action="subscribe.php" method="POST" accept-charset="utf-8">

<!-- Name -->
<label for="name">Name</label><br/>
<input type="text" name="name" id="name"/><br/>

<!-- Email -->
<label for="email">Email</label><br/>
<input type="email" name="email" id="email"/><br/>

<!-- List selection (put your listIDs in 'value') -->
<input type="checkbox" name="list" value="zX1Mon0bSpW6R6Ujfy5KzA"><strong>Uman</strong> (monthly)<br/>
<input type="checkbox" name="list" value="1763S892r67QExWYjQ4cgrAH3w"><strong>Drifts</strong> (occasional)<br/>

<p class="g-recaptcha" data-sitekey="6LcAiicqAAAAAKuD_c7xD53NGHkwVaHgL3p4Ak1C"></p><div style="display:none;">
<label for="hp">HP</label><br/>
<input type="text" name="hp" id="hp"/>
</div>

<input type="submit" name="Subscribe" id="submit"/>

</form>

</p>
</div>