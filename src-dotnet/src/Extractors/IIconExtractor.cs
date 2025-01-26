namespace Sugjo.Ocularus.Iconifier.Extractors;

public interface IIconExtractor
{
	Task ExtractToAsync(string filePath, string? outputPath = null, CancellationToken cancellationToken = default);
}
