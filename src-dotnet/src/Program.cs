foreach (var arg in args)
{
	if (string.IsNullOrWhiteSpace(arg))
	{
		Console.WriteLine($"[WARNING]: The '{arg}' was null, empty or consist only of white spaces. Skipping...");
		continue;
	}

	if (!File.Exists(arg))
	{
		Console.WriteLine($"[WARNING]: The file on '{arg}' path does not exists. Skipping...");
		continue;
	}
}
