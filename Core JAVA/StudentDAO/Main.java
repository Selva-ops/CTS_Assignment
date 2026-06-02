package StudentDAO;

public class Main {

    public static void main(String[] args) {

        StudentDAO dao = new StudentDAO();
        dao.insertStudent(1, "Ravi", 41);
        dao.insertStudent(12, "Dravid", 19);
    }
}
