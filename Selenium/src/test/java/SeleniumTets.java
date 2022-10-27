import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;


public class SeleniumTets {
    private WebDriver driver;
    //./src/test/java/webdriver/chromedriver.exe
    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver","C:\\Users\\Jorge.Guillen\\OneDrive - Solera Holdings, Inc\\Desktop\\chromedriver.exe");
        driver = new ChromeDriver();
        driver.manage().window().maximize();
        driver.get("http://localhost:3000/");

    }

    @Test
    public void testLogInSucced(){
        driver.findElement(By.id("SingUpText")).sendKeys("email");
        driver.findElement(By.id("SingUpButton")).click();
        Assert.assertTrue(driver.findElement(By.id("NextButton")).isDisplayed());
    }

    @Test
    public void testLogInFailed(){
        driver.findElement(By.id("SingUpText")).sendKeys("WrongEmail");
        driver.findElement(By.id("SingUpButton")).click();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"SingUpText\"]")).isDisplayed());
    }

    @Test
    public void testNextButton(){
        driver.findElement(By.id("SingUpText")).sendKeys("email");
        driver.findElement(By.id("SingUpButton")).click();
        driver.findElement(By.id("NextButton")).click();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"2\"]")).isDisplayed());
    }

    @Test
    public void testRadioButton(){
        driver.findElement(By.id("SingUpText")).sendKeys("email");
        driver.findElement(By.id("SingUpButton")).click();
        driver.findElement(By.xpath("//*[@id=\"question1RadioButton1\"]/span[1]/input")).click();
        Assert.assertTrue(driver.findElement(By.xpath("//*[@id=\"question1RadioButton1\"]/span[1]/input")).isSelected());
    }

    @Test
    public void testRadioButtonToggle(){
        driver.findElement(By.id("SingUpText")).sendKeys("email");
        driver.findElement(By.id("SingUpButton")).click();
        driver.findElement(By.xpath("//*[@id=\"question1RadioButton1\"]/span[1]/input")).click();
        driver.findElement(By.xpath("//*[@id=\"question1RadioButton2\"]/span[1]/input")).click();
        Assert.assertFalse(driver.findElement(By.xpath("//*[@id=\"question1RadioButton1\"]/span[1]/input")).isSelected());
    }

    @After
    public  void  tearDown(){
        driver.quit();
    }



}
