import{_ as n,c as s,o as a,a2 as p}from"./chunks/framework.CVSRuG3h.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"kaifa/22.校验.md","filePath":"kaifa/22.校验.md"}'),e={name:"kaifa/22.校验.md"},l=p(`<div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;org.hibernate&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;hibernate-validator&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;5.4.3.Final&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span>
<span class="line"><span>    &lt;dependency&gt;</span></span>
<span class="line"><span>      &lt;groupId&gt;org.glassfish&lt;/groupId&gt;</span></span>
<span class="line"><span>      &lt;artifactId&gt;javax.el&lt;/artifactId&gt;</span></span>
<span class="line"><span>      &lt;version&gt;3.0.0&lt;/version&gt;</span></span>
<span class="line"><span>    &lt;/dependency&gt;</span></span></code></pre></div><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>package com.me.domain;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>import org.hibernate.validator.constraints.NotBlank;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.validation.constraints.Min;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class Student {</span></span>
<span class="line"><span>    private Integer id;</span></span>
<span class="line"><span>    @NotBlank</span></span>
<span class="line"><span>    @Min(4)</span></span>
<span class="line"><span>    private String name;</span></span>
<span class="line"><span>    private Integer sex;</span></span>
<span class="line"><span>    private Integer age;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    public Integer getId() {</span></span>
<span class="line"><span>        return id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setId(Integer id) {</span></span>
<span class="line"><span>        this.id = id;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public String getName() {</span></span>
<span class="line"><span>        return name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setName(String name) {</span></span>
<span class="line"><span>        this.name = name;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Integer getSex() {</span></span>
<span class="line"><span>        return sex;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setSex(Integer sex) {</span></span>
<span class="line"><span>        this.sex = sex;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public Integer getAge() {</span></span>
<span class="line"><span>        return age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    public void setAge(Integer age) {</span></span>
<span class="line"><span>        this.age = age;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    @Override</span></span>
<span class="line"><span>    public String toString() {</span></span>
<span class="line"><span>        return &quot;Student{&quot; +</span></span>
<span class="line"><span>                &quot;id=&quot; + id +</span></span>
<span class="line"><span>                &quot;, name=&#39;&quot; + name + &#39;\\&#39;&#39; +</span></span>
<span class="line"><span>                &quot;, sex=&quot; + sex +</span></span>
<span class="line"><span>                &quot;, age=&quot; + age +</span></span>
<span class="line"><span>                &#39;}&#39;;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>package com.me;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import com.me.domain.Student;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import javax.validation.ConstraintViolation;</span></span>
<span class="line"><span>import javax.validation.Validation;</span></span>
<span class="line"><span>import javax.validation.Validator;</span></span>
<span class="line"><span>import java.util.Set;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>public class App {</span></span>
<span class="line"><span>    public static void main(String[] args) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        try {</span></span>
<span class="line"><span>            Student student = new Student();</span></span>
<span class="line"><span>            student.setId(1);</span></span>
<span class="line"><span>            student.setName(&quot;张三&quot;);</span></span>
<span class="line"><span>            student.setAge(18);</span></span>
<span class="line"><span>            student.setSex(1);</span></span>
<span class="line"><span>            Validator validator = Validation.buildDefaultValidatorFactory().getValidator();</span></span>
<span class="line"><span>            Set&lt;ConstraintViolation&lt;Student&gt;&gt; validate = validator.validate(student);</span></span>
<span class="line"><span>            if (validate.size() &gt; 0) {</span></span>
<span class="line"><span>                validate.forEach(System.out::println);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>                System.out.println(&quot;验证不通过&quot;);</span></span>
<span class="line"><span>            } else {</span></span>
<span class="line"><span>                System.out.println(&quot;验证通过&quot;);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        }catch (Exception e){</span></span>
<span class="line"><span>            e.printStackTrace();</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre></div>`,2),t=[l];function i(c,o,r,d,g,u){return a(),s("div",null,t)}const _=n(e,[["render",i]]);export{m as __pageData,_ as default};
