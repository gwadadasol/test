import org.junit.Test;

import static org.junit.Assert.*;

public class UnitTest1Test {

    @Test
    public void test(){
        UnitTest1 test1 = new UnitTest1();
        int result = test1.addNumber(5,2);
        assertEquals(7, result);

    }

    /* java doc */
    @Test
    public void testString(){
        UnitTest1 test1 = new UnitTest1();
        String result = test1.addString("pa", "pa");
        assertEquals("papa", result);
    }

}