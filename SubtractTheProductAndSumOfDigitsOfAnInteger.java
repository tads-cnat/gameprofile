import java.util.*;
import java.util.stream.*;

public class Solution {
    public static int subtractProductAndSum(int n) {
        Integer number = Integer.valueOf(n);
        List<Integer> numbers = Stream.of(number.toString().split("")).map(e -> Integer.parseInt(e)).toList();
        int sum = numbers.stream().reduce((n1, n2) -> n1 + n2).get();
        int multiplication = numbers.stream().reduce((n1, n2) -> n1 * n2).get();
        return multiplication - sum;
    }
}
