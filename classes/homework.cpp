#include <iostream>
#include <string>
#include <fstream>

using namespace std;

int main() {
  // Create a vector to store the paths of the shortcuts.
  vector<string> shortcut_paths;

  // Get the current working directory.
  string current_directory = getcwd();

  // Open a file to write the shortcut paths.
  ofstream shortcut_file("shortcuts.txt");

  // Iterate through all files in the current directory.
  for (const auto& file : readdir(current_directory.c_str())) {
    // If the file is called "assignment.docx", create a shortcut for it.
    if (file.d_name == "assignment.docx") {
      // Get the path of the file.
      string file_path = current_directory + "/" + file.d_name;

      // Create a shortcut for the file.
      string shortcut_path = file_path + ".lnk";

      // Create a file object for the shortcut.
      fstream shortcut(shortcut_path, ios::out);

      // Write the target path of the shortcut to the file.
      shortcut << file_path << endl;

      // Close the file object for the shortcut.
      shortcut.close();

      // Add the shortcut path to the vector.
      shortcut_paths.push_back(shortcut_path);
    }
  }

  // Close the file to write the shortcut paths.
  shortcut_file.close();

  return 0;
}
