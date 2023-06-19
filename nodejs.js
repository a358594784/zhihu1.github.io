public class y {
    public static final String a = "AES/CBC/PKCS7Padding";

    public static String a() {
        byte[] bArr = new byte[8];
        new SecureRandom().nextBytes(bArr);
        return a(new IvParameterSpec(bArr).getIV());
    }

    public static SecretKeySpec b() {
        try {
            KeyGenerator keyGenerator = KeyGenerator.getInstance("AES");
            keyGenerator.init(128, new SecureRandom());
            return new SecretKeySpec(keyGenerator.generateKey().getEncoded(), "AES");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
            return null;
        }
    }
public static String a(String str, String str2) {
        byte[] bArr;
        try {
            bArr = c(str);
        } catch (Exception e) {
            e.printStackTrace();
            bArr = null;
        }
        byte[] a2 = a(bArr, c(str2));
        if (a2 == null) {
            return null;
        }
        try {
            return new String(a2, "UTF-8");
        } catch (UnsupportedEncodingException e2) {
            e2.printStackTrace();
            return null;
        }
    }

    public static String b(String str, byte[] bArr) {
        try {
            Cipher cipher = Cipher.getInstance(a);
            cipher.init(1, new SecretKeySpec(bArr, "AES"));
            return a(cipher.doFinal(str.getBytes("UTF-8")));
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String a(String str, byte[] bArr) {
        try {
            Cipher cipher = Cipher.getInstance(a);
            cipher.init(2, new SecretKeySpec(bArr, "AES"));
            return new String(cipher.doFinal(c(str)), "UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String b(String str, String str2) {
        byte[] bArr;
        try {
            bArr = str.getBytes("UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            bArr = null;
        }
        return a(b(bArr, new SecretKeySpec(c(str2), "AES").getEncoded()));
    }
public static String a(String str, String str2, String str3) {
        byte[] bArr;
        try {
            bArr = c(str);
        } catch (Exception e) {
            e.printStackTrace();
            bArr = null;
        }
        byte[] a2 = a(bArr, str2, str3);
        if (a2 == null) {
            return null;
        }
        try {
            return new String(a2, "UTF-8");
        } catch (UnsupportedEncodingException e2) {
            e2.printStackTrace();
            return null;
        }
    }

    public static SecretKeySpec b(String str) {
        byte[] bArr;
        if (str == null) {
            str = "";
        }
        StringBuffer stringBuffer = new StringBuffer(16);
        stringBuffer.append(str);
        while (stringBuffer.length() < 16) {
            stringBuffer.append("0");
        }
        if (stringBuffer.length() > 16) {
            stringBuffer.setLength(16);
        }
        try {
            bArr = stringBuffer.toString().getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            bArr = null;
        }
        return new SecretKeySpec(bArr, "AES");
    }

    public static byte[] a(byte[] bArr, String str, String str2) {
        try {
            SecretKeySpec b = b(str);
            Cipher cipher = Cipher.getInstance(a);
            cipher.init(2, b, a(str2));
            return cipher.doFinal(bArr);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static IvParameterSpec a(String str) {
        byte[] bArr;
        if (str == null) {
            str = "";
        }
        StringBuffer stringBuffer = new StringBuffer(16);
        stringBuffer.append(str);
        while (stringBuffer.length() < 16) {
            stringBuffer.append("0");
        }
        if (stringBuffer.length() > 16) {
            stringBuffer.setLength(16);
        }
        try {
            bArr = stringBuffer.toString().getBytes("UTF-8");
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
            bArr = null;
        }
        return new IvParameterSpec(bArr);
    }

    public static byte[] b(byte[] bArr, String str, String str2) {
        try {
            SecretKeySpec b = b(str);
            Cipher cipher = Cipher.getInstance(a);
            cipher.init(1, b, a(str2));
            return cipher.doFinal(bArr);
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    public static String b(String str, String str2, String str3) {
        byte[] bArr;
        try {
            bArr = str.getBytes("UTF-8");
        } catch (Exception e) {
            e.printStackTrace();
            bArr = null;
        }
        return Base64.encodeToString(b(bArr, str2, str3), 0);
    }

    public static String a(byte[] bArr) {
        StringBuffer stringBuffer = new StringBuffer(bArr.length * 2);
        for (byte b : bArr) {
            String hexString = Integer.toHexString(b & 255);
            if (hexString.length() == 1) {
                stringBuffer.append("0");
            }
            stringBuffer.append(hexString);
        }
        return stringBuffer.toString().toUpperCase();
    }
}
