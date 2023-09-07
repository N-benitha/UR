#include <iostream>
#include <string>
#include <vector>
#include <fstream>
#include <dirent.h>

using namespace std;

int main() {
  // Get the current working directory.
  char current_directory[1024];
  getcwd(current_directory, sizeof(current_directory));

  // Iterate through all files in the current directory.
  DIR *dir;
  struct dirent *entry;
  vector<string> shortcut_paths;

  dir = opendir(current_directory);
  if (dir == NULL) {
    cerr << "Could not open directory" << endl;
    return 1;
  }

  while ((entry = readdir(dir)) != NULL) {
    // If the file is called "assignment.docx", create a shortcut for it.
    if (strcmp(entry->d_name, "assignment.docx") == 0) {
      // Get the path of the file.
      string file_path = current_directory + "/" + entry->d_name;

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

  // Write the shortcut paths to a file.
  ofstream shortcut_file("shortcuts.txt");
  for (const auto& shortcut_path : shortcut_paths) {
    shortcut_file << shortcut_path << endl;
  }

  closedir(dir);

  return 0;
}

